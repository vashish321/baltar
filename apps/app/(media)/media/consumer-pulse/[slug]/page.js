/**
 * Individual Consumer Pulse article page.
 *
 * Route:  /media/consumer-pulse/[slug]
 * Slug:   the NewsArticle.id (CUID) — e.g. /media/consumer-pulse/cm1abc2def3ghi
 *
 * This is a server component. It:
 *  1. Fetches the article server-side so the full HTML is crawlable by Google.
 *  2. Generates per-article metadata (title, description, OG, canonical).
 *  3. Embeds NewsArticle JSON-LD for Google News eligibility.
 *  4. Does NOT touch or remove the existing NewsSection modal system.
 */

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import HeaderComponent from '@/components/ConsumerPulseComponent/HeaderComponent/HeaderComponent';
import Footer from '@/components/ConsumerPulseComponent/FooterComponent/Footer';
import styles from './ArticlePage.module.css';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://baltar-inc-1.onrender.com';
const SITE_URL = 'https://baltar.ca';

// ─── Data fetching ────────────────────────────────────────────────────────────

async function fetchArticle(id) {
  try {
    const res = await fetch(`${API_BASE}/api/consumer-pulse/articles/${id}`, {
      next: { revalidate: 300 }, // ISR: revalidate every 5 minutes
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.success ? data.article : null;
  } catch {
    return null;
  }
}

// ─── Dynamic metadata ─────────────────────────────────────────────────────────

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await fetchArticle(slug);

  if (!article) {
    return buildMetadata({
      title: 'Article Not Found',
      path: '/media/consumer-pulse',
      robots: 'noindex,nofollow',
    });
  }

  return buildMetadata({
    title: article.title,
    description: article.summary || article.content?.substring(0, 155) || '',
    path: `/media/consumer-pulse/${slug}`,
    ogImage: article.imageUrl || `${SITE_URL}/og-default.png`,
  });
}

// ─── Page component ───────────────────────────────────────────────────────────

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = await fetchArticle(slug);

  if (!article) {
    notFound();
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  const publishedDate = article.publishedAt
    ? new Date(article.publishedAt).toISOString()
    : new Date(article.createdAt).toISOString();

  const displayDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString('en-CA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Recently published';

  const keywords = Array.isArray(article.keywords) ? article.keywords : [];
  const canonicalUrl = `${SITE_URL}/media/consumer-pulse/${slug}`;

  // ── NewsArticle JSON-LD ────────────────────────────────────────────────────
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.summary || article.content?.substring(0, 155) || '',
    datePublished: publishedDate,
    dateModified: article.updatedAt
      ? new Date(article.updatedAt).toISOString()
      : publishedDate,
    image: article.imageUrl || `${SITE_URL}/og-default.png`,
    url: canonicalUrl,
    author: {
      '@type': article.author ? 'Person' : 'Organization',
      name: article.author || 'Consumer Pulse',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Baltar Inc.',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/Baltar-new.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    keywords: keywords.join(', '),
    articleSection: article.category || 'General',
    inLanguage: 'en-CA',
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      {/* JSON-LD structured data — required for Google News */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeaderComponent />

      <main className={styles.main}>
        <div className={styles.container}>

          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <Link href="/media/consumer-pulse" className={styles.breadcrumbLink}>
              Consumer Pulse
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent} aria-current="page">
              {article.title.length > 60
                ? article.title.substring(0, 60) + '…'
                : article.title}
            </span>
          </nav>

          {/* Article header */}
          <header className={styles.header}>
            {article.category && (
              <span className={styles.categoryBadge}>{article.category}</span>
            )}
            <h1 className={styles.title}>{article.title}</h1>

            <div className={styles.meta}>
              {article.author && (
                <span className={styles.author}>By {article.author}</span>
              )}
              <time className={styles.date} dateTime={publishedDate}>
                {displayDate}
              </time>
            </div>
          </header>

          {/* Hero image */}
          {article.imageUrl && (
            <div className={styles.imageWrapper}>
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={1200}
                height={630}
                className={styles.heroImage}
                unoptimized
                priority
              />
            </div>
          )}

          {/* Article body */}
          <article className={styles.body}>
            {article.summary && (
              <p className={styles.summary}>{article.summary}</p>
            )}
            {article.content && (
              <div className={styles.content}>
                {article.content.split('\n').map((para, i) =>
                  para.trim() ? (
                    <p key={i} className={styles.paragraph}>
                      {para.trim()}
                    </p>
                  ) : null
                )}
              </div>
            )}
          </article>

          {/* Source link */}
          {article.sourceUrl && (
            <div className={styles.sourceSection}>
              <p className={styles.sourceLabel}>Original source:</p>
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sourceLink}
              >
                Read Full Article →
              </a>
            </div>
          )}

          {/* Keywords / tags */}
          {keywords.length > 0 && (
            <div className={styles.tags}>
              {keywords.slice(0, 8).map((kw, i) => (
                <span key={i} className={styles.tag}>
                  {kw}
                </span>
              ))}
            </div>
          )}

          {/* Back link */}
          <div className={styles.backSection}>
            <Link href="/media/consumer-pulse" className={styles.backLink}>
              ← Back to Consumer Pulse
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
