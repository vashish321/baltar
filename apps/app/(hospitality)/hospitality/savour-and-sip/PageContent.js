'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './SavourPage.module.css';

const UNSPLASH = 'https://images.unsplash.com/photo-';

const heroImg      = `${UNSPLASH}1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80`;
const philosophyImg= `${UNSPLASH}1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80`;
const ctaImg       = `${UNSPLASH}1510626176961-4b57d4fbad03?auto=format&fit=crop&w=1600&q=80`;

const galleryImgs = [
  `${UNSPLASH}1600891964599-d7f18b61c1d4?auto=format&fit=crop&w=900&q=80`,
  `${UNSPLASH}1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80`,
  `${UNSPLASH}1528605248644-14dd04022da1?auto=format&fit=crop&w=700&q=80`,
  `${UNSPLASH}1551782966-7a1d5b5af4f2?auto=format&fit=crop&w=700&q=80`,
];

const services = [
  {
    num: '01',
    title: 'Private Dining & Catering',
    desc: 'Seasonal menus crafted from locally sourced ingredients, presented with the precision and artistry of a fine dining kitchen — delivered to your venue.',
    href: '#',
  },
  {
    num: '02',
    title: 'Curated Bar Programs',
    desc: 'Bespoke cocktail menus, sommelier-selected wine pairings, and zero-proof beverage programs designed to complement every course and occasion.',
    href: '#',
  },
  {
    num: '03',
    title: 'Full-Service Events',
    desc: 'From intimate gatherings of twenty to gala evenings of five hundred, we manage every operational detail so your guests experience only seamless hospitality.',
    href: '#',
  },
];

export default function PageContent() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroImgWrap}>
          <Image src={heroImg} alt="Elegantly plated dish" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Baltar Hospitality — Savour &amp; Sip</span>
          <h1 className={styles.heroHeading}>
            Where Every Detail<br />Becomes a Memory
          </h1>
          <p className={styles.heroSub}>
            Luxury catering, curated bar programs, and full-service event hospitality across Toronto and the GTA.
          </p>
          <div className={styles.heroCtas}>
            <a href="mailto:hospitality@baltar.ca" className={styles.btnGold}>Enquire Now</a>
            <a href="#services" className={styles.btnOutline}>Our Services</a>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyImgWrap}>
          <Image src={philosophyImg} alt="Restaurant interior" fill sizes="50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.philosophyContent}>
          <div className={styles.goldRule} />
          <span className={styles.philosophyEyebrow}>Our Philosophy</span>
          <h2 className={styles.philosophyHeading}>
            Hospitality as an<br />Art Form
          </h2>
          <p className={styles.philosophyBody}>
            We believe exceptional hospitality isn't measured in headcount or courses — it's felt in the pause between bites, in a glass refilled before it empties, in a room that holds exactly the right warmth. Our team brings that conviction to every engagement.
          </p>
          <a href="mailto:hospitality@baltar.ca" className={styles.btnGold}>
            Start a Conversation
          </a>
        </div>
      </section>

      {/* ── Services ── */}
      <section className={styles.servicesSection} id="services">
        <span className={styles.sectionLabel}>What We Offer</span>
        <h2 className={styles.sectionTitle}>
          Tailored Experiences,<br />Delivered Flawlessly
        </h2>
        <div className={styles.servicesGrid}>
          {services.map((s) => (
            <div key={s.num} className={styles.serviceCard}>
              <div className={styles.serviceNum}>{s.num}</div>
              <h3 className={styles.serviceCardTitle}>{s.title}</h3>
              <p className={styles.serviceCardDesc}>{s.desc}</p>
              <a href="mailto:hospitality@baltar.ca" className={styles.serviceLink}>
                Enquire →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className={styles.gallerySection}>
        <span className={styles.sectionLabel}>Portfolio</span>
        <h2 className={styles.sectionTitle}>A Taste of Our Work</h2>
        <div className={styles.galleryGrid}>
          {galleryImgs.map((src, i) => (
            <div key={i} className={styles.galleryItem}>
              <Image src={src} alt={`Gallery image ${i + 1}`} fill sizes="(max-width: 960px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
              <div className={styles.galleryOverlay} />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaImgWrap}>
          <Image src={ctaImg} alt="Event dining setup" fill sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.ctaOverlay} />
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaHeading}>
            Your Next Unforgettable<br />Event Starts Here
          </h2>
          <p className={styles.ctaSub}>
            Corporate dinners, private celebrations, wedding receptions, brand activations — we're ready to bring your vision to life with precision and grace.
          </p>
          <a href="mailto:hospitality@baltar.ca" className={styles.btnGold}>
            Book a Consultation
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerBrand}>Savour &amp; Sip</div>
            <span className={styles.footerTagline}>A Baltar Hospitality Company</span>
          </div>
          <nav className={styles.footerNav}>
            <a href="#services">Services</a>
            <a href="mailto:hospitality@baltar.ca">Contact</a>
            <Link href="/">Baltar Inc.</Link>
          </nav>
        </div>
        <div className={styles.footerBottom}>
          <span className={styles.footerCopyright}>
            © {new Date().getFullYear()} Savour &amp; Sip. All rights reserved.
          </span>
          <Link href="/" className={styles.footerParent}>
            Baltar Inc. ↗
          </Link>
        </div>
      </footer>

    </div>
  );
}
