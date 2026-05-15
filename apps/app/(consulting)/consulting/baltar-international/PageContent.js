'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './BaltarIntlPage.module.css';

const U = 'https://images.unsplash.com/photo-';

const heroImg  = `${U}1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80`;
const aboutImg = `${U}1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80`;

const stats = [
  { num: '40+', label: 'Markets Served' },
  { num: '$500M+', label: 'Deal Value Advised' },
  { num: '200+', label: 'Client Engagements' },
  { num: '18+', label: 'Years Operating' },
];

const services = [
  {
    icon: '🌐',
    title: 'Market Entry Strategy',
    desc: 'We identify and validate new market opportunities, mapping the regulatory, competitive, and cultural landscape before you commit capital.',
  },
  {
    icon: '🤝',
    title: 'Cross-Border M&A Advisory',
    desc: 'Guidance through international acquisitions, joint ventures, and strategic partnerships — from target identification through close.',
  },
  {
    icon: '⚖️',
    title: 'Regulatory & Compliance',
    desc: 'Navigating complex multi-jurisdictional regulatory requirements, licensing, and compliance frameworks across our operating markets.',
  },
  {
    icon: '📊',
    title: 'Trade & Supply Chain',
    desc: 'Optimising international trade flows, sourcing strategies, and supply chain structures for cost efficiency and resilience.',
  },
  {
    icon: '🏛️',
    title: 'Government Relations',
    desc: 'Strategic government affairs and stakeholder engagement, connecting clients with the right institutional relationships globally.',
  },
  {
    icon: '💼',
    title: 'Executive Deployment',
    desc: 'Placing experienced interim executives into international operations during critical transition and growth periods.',
  },
];

const regions = [
  {
    name: 'North America',
    desc: 'Canada · United States · Mexico',
    img: `${U}1534430480872-3498386e7856?auto=format&fit=crop&w=700&q=80`,
  },
  {
    name: 'Europe',
    desc: 'UK · EU · Nordics',
    img: `${U}1499856871958-5b9627545d1a?auto=format&fit=crop&w=700&q=80`,
  },
  {
    name: 'Asia Pacific',
    desc: 'Southeast Asia · Japan · Australia',
    img: `${U}1506905925346-21bda4d32df4?auto=format&fit=crop&w=700&q=80`,
  },
];

export default function PageContent() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroImgWrap}>
          <Image src={heroImg} alt="International city skyline" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 60%' }} />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.heroPillDot} />
            <span className={styles.heroPillText}>Baltar Consultancy — International</span>
          </div>
          <h1 className={styles.heroHeading}>
            Global Advisory.<br />
            <span className={styles.heroHeadingAccent}>Local Intelligence.</span>
          </h1>
          <p className={styles.heroSub}>
            Baltar International guides businesses through complex cross-border growth — strategy, transactions, regulation, and execution across 40+ markets.
          </p>
          <div className={styles.heroCtas}>
            <a href="mailto:international@baltar.ca" className={styles.btnGreen}>
              Engage Us
            </a>
            <a href="#services" className={styles.btnOutline}>
              Our Services
            </a>
          </div>
        </div>
        <div className={styles.heroCountries}>
          <span className={styles.heroCountriesLabel}>Active Markets</span>
          <div className={styles.heroCountriesList}>
            {['CA', 'US', 'UK', 'EU', 'SG', 'AU'].map((c) => (
              <span key={c} className={styles.heroCountry}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className={styles.statsBand}>
        {stats.map((s) => (
          <div key={s.label} className={styles.statItem}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── About ── */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutLeft}>
          <div className={styles.sectionTag}>
            <span className={styles.tagLine} />
            <span className={styles.tagText}>Who We Are</span>
          </div>
          <h2 className={styles.aboutHeading}>
            We Operate Where<br />Complexity Is the Norm
          </h2>
          <p className={styles.aboutBody}>
            Baltar International is Baltar Inc.'s global advisory practice. We work with companies entering new markets, navigating acquisitions, and building resilient international operations. Our strength is in marrying strategic rigour with on-the-ground institutional knowledge — so our clients move with confidence, not assumption.
          </p>
          <a href="mailto:international@baltar.ca" className={styles.btnDark}>
            Meet the Team
          </a>
        </div>
        <div className={styles.aboutRight}>
          <div className={styles.aboutImgWrap}>
            <Image src={aboutImg} alt="Consulting team at work" fill sizes="50vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className={styles.servicesSection} id="services">
        <div className={styles.servicesIntro}>
          <div>
            <div className={styles.sectionTag}>
              <span className={styles.tagLine} />
              <span className={styles.tagText}>What We Do</span>
            </div>
            <h2 className={styles.servicesTitle}>
              Advisory Services
            </h2>
          </div>
          <div>
            <p className={styles.servicesDesc}>
              Whether you're pursuing your first international market or optimising an existing global footprint, we provide the strategic clarity and operational expertise to get you there.
            </p>
            <a href="mailto:international@baltar.ca" className={styles.btnDark}>
              All Services →
            </a>
          </div>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((s) => (
            <div key={s.title} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{s.icon}</div>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Regions ── */}
      <section className={styles.regionsSection}>
        <div className={styles.sectionTag}>
          <span className={styles.tagLine} style={{ background: '#4ade80' }} />
          <span className={styles.tagText} style={{ color: 'rgba(255,255,255,0.35)' }}>Coverage</span>
        </div>
        <h2 className={styles.regionsTitle}>
          Where We Operate
        </h2>
        <div className={styles.regionsGrid}>
          {regions.map((r) => (
            <div key={r.name} className={styles.regionCard}>
              <div className={styles.regionImgWrap}>
                <Image src={r.img} alt={r.name} fill sizes="(max-width: 960px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.regionOverlay} />
              <div className={styles.regionInfo}>
                <h3 className={styles.regionName}>{r.name}</h3>
                <p className={styles.regionDesc}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>
          Ready to Grow Across Borders?
        </h2>
        <p className={styles.ctaSub}>
          Let's talk about your international ambitions. A conversation with our team costs nothing — but the clarity it provides is invaluable.
        </p>
        <a href="mailto:international@baltar.ca" className={styles.btnDark}>
          Schedule a Consultation
        </a>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerWordmark}>Baltar International</div>
            <span className={styles.footerSub}>A Baltar Consultancy Company</span>
          </div>
          <nav className={styles.footerLinks}>
            <a href="#services">Services</a>
            <a href="mailto:international@baltar.ca">Contact</a>
            <Link href="/consulting/baltar-engineering">Baltar Consulting</Link>
            <Link href="/">Baltar Inc.</Link>
          </nav>
        </div>
        <div className={styles.footerBottom}>
          <span className={styles.footerCopyright}>
            © {new Date().getFullYear()} Baltar International. All rights reserved.
          </span>
          <Link href="/" className={styles.footerParent}>
            Baltar Inc. ↗
          </Link>
        </div>
      </footer>

    </div>
  );
}
