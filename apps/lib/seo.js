/**
 * apps/lib/seo.js
 * Centralised SEO utilities for the Baltar Inc multi-vertical ecosystem.
 *
 * Usage:
 *   import { buildMetadata, generateOrganizationSchema, generateServiceSchema, generateSoftwareSchema } from '@/lib/seo';
 *   export const metadata = buildMetadata({ title: '...', description: '...', path: '/technologies/toronto-media-inc' });
 */

const SITE_URL = 'https://baltar.ca';
const SITE_NAME = 'Baltar Inc';
const DEFAULT_DESCRIPTION =
  'Baltar Inc — a modern multi-vertical ecosystem operating across technology, hospitality, consulting, finance, fashion, and media.';

/**
 * Build full Next.js Metadata object for a page.
 *
 * @param {object} options
 * @param {string} options.title          — Page title (will be suffixed with " | Baltar Inc" unless noSuffix is true)
 * @param {string} [options.description]  — Meta description (defaults to site description)
 * @param {string} [options.path]         — URL path e.g. '/technologies/toronto-media-inc' (used for canonical)
 * @param {string} [options.ogImage]      — Absolute URL to OG image (defaults to /og-default.png)
 * @param {string} [options.robots]       — Robots directive e.g. 'noindex,nofollow' (defaults to 'index,follow')
 * @param {boolean} [options.noSuffix]    — If true, use title exactly without " | Baltar Inc" suffix
 * @returns {import('next').Metadata}
 */
export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  ogImage = `${SITE_URL}/og-default.png`,
  robots = 'index, follow',
  noSuffix = false,
} = {}) {
  const fullTitle = noSuffix ? title : `${title} | ${SITE_NAME}`;
  const canonical = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    robots,
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

/**
 * Generate JSON-LD for an Organisation.
 *
 * @param {object} options
 * @param {string} options.name
 * @param {string} options.url
 * @param {string} [options.logo]
 * @param {string} [options.description]
 * @param {string[]} [options.sameAs]  — Social profile URLs
 * @returns {object} JSON-LD object (pass to <script type="application/ld+json">)
 */
export function generateOrganizationSchema({
  name,
  url,
  logo = `${SITE_URL}/Baltar-new.svg`,
  description = DEFAULT_DESCRIPTION,
  sameAs = [],
} = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    sameAs,
  };
}

/**
 * Generate JSON-LD for a Service.
 *
 * @param {object} options
 * @param {string} options.name
 * @param {string} options.description
 * @param {string} options.url
 * @param {string} [options.provider]       — Provider org name (defaults to SITE_NAME)
 * @param {string} [options.areaServed]     — e.g. 'CA' or 'Canada'
 * @param {string} [options.serviceType]
 * @returns {object} JSON-LD object
 */
export function generateServiceSchema({
  name,
  description,
  url,
  provider = SITE_NAME,
  areaServed = 'CA',
  serviceType = '',
} = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: SITE_URL,
    },
    areaServed,
    ...(serviceType ? { serviceType } : {}),
  };
}

/**
 * Generate JSON-LD for a SoftwareApplication.
 *
 * @param {object} options
 * @param {string} options.name
 * @param {string} options.description
 * @param {string} options.url
 * @param {string} [options.applicationCategory]  — e.g. 'BusinessApplication'
 * @param {string} [options.operatingSystem]       — e.g. 'Web, iOS, Android'
 * @param {string} [options.offers]                — Price description string
 * @returns {object} JSON-LD object
 */
export function generateSoftwareSchema({
  name,
  description,
  url,
  applicationCategory = 'BusinessApplication',
  operatingSystem = 'Web',
  offers = 'Free',
} = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CAD',
      description: offers,
    },
  };
}
