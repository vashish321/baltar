'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './VRPage.module.css';

const U = 'https://images.unsplash.com/photo-';

const heroImg    = `${U}1511499767150-a7a97e55b370?auto=format&fit=crop&w=1600&q=80`;
const introImg   = `${U}1508296695146-257a814ea21d?auto=format&fit=crop&w=900&q=80`;
const featureImg = `${U}1574258495973-f010f108d2e3?auto=format&fit=crop&w=900&q=80`;

const collections = [
  {
    name: 'Optic I',
    season: 'SS 2025',
    img: `${U}1591076482161-9b31d1e6c4ee?auto=format&fit=crop&w=700&q=80`,
  },
  {
    name: 'Velocity',
    season: 'Resort 2025',
    img: `${U}1556306535-0f09a537f0a3?auto=format&fit=crop&w=700&q=80`,
  },
  {
    name: 'Noir Edition',
    season: 'FW 2025',
    img: `${U}1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=80`,
  },
];

const specs = [
  { label: 'Frame Material', value: 'Aerospace-grade titanium' },
  { label: 'Lens Technology', value: 'AR micro-display' },
  { label: 'Weight', value: '28g total' },
  { label: 'Battery Life', value: '14h continuous' },
];

const marqueeItems = [
  'Eyewear', '·', 'Wearable Tech', '·', 'AR Frames', '·',
  'Limited Edition', '·', 'Bespoke Craft', '·', 'VR by Baltar', '·',
  'Eyewear', '·', 'Wearable Tech', '·', 'AR Frames', '·',
  'Limited Edition', '·', 'Bespoke Craft', '·', 'VR by Baltar', '·',
];

export default function PageContent() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroImgWrap}>
          <Image src={heroImg} alt="VR eyewear editorial" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
        </div>
        <div className={styles.heroCaption}>
          <span className={styles.heroCaptionLabel}>Baltar Fashion — SS 2025</span>
          <h1 className={styles.heroCaptionTitle}>VR</h1>
        </div>
        <div className={styles.heroScrollHint}>
          <span className={styles.heroScrollLine} />
          Scroll
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className={styles.marqueeStrip}>
        <div className={styles.marqueeInner}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              {item === '·' ? <span className={styles.marqueeDot}>·</span> : item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Editorial intro ── */}
      <section className={styles.introSection}>
        <div className={styles.introLeft}>
          <div className={styles.introImgWrap}>
            <Image src={introImg} alt="VR eyewear close-up" fill sizes="50vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <div className={styles.introRight}>
          <span className={styles.introEyebrow}>The House of VR</span>
          <h2 className={styles.introHeading}>
            Craft. Precision.<br />Vision Redefined.
          </h2>
          <p className={styles.introBody}>
            VR is a luxury eyewear and fashion technology label born at the intersection of bespoke craftsmanship and immersive technology. Every frame is an instrument — engineered to disappear on the face, while quietly expanding what the eye can perceive.
          </p>
          <a href="mailto:fashion@baltar.ca" className={styles.btnWhite}>
            Enquire
          </a>
        </div>
      </section>

      {/* ── Collections ── */}
      <section className={styles.collectionsSection}>
        <div className={styles.collectionsHeader}>
          <h2 className={styles.collectionsTitle}>Collections</h2>
          <a href="mailto:fashion@baltar.ca" className={styles.collectionsSeeAll}>
            View All →
          </a>
        </div>
        <div className={styles.collectionsGrid}>
          {collections.map((c) => (
            <div key={c.name} className={styles.collectionCard}>
              <div className={styles.collectionImgWrap}>
                <Image src={c.img} alt={c.name} fill sizes="(max-width: 960px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.collectionInfo}>
                <span className={styles.collectionSeason}>{c.season}</span>
                <h3 className={styles.collectionName}>{c.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Feature ── */}
      <section className={styles.featureStrip}>
        <div className={styles.featureImgWrap}>
          <Image src={featureImg} alt="AR frame technology" fill sizes="50vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.featureContent}>
          <span className={styles.featureEyebrow}>Technology</span>
          <h2 className={styles.featureHeading}>
            The Architecture<br />of Seeing
          </h2>
          <p className={styles.featureBody}>
            Our AR micro-display system is embedded within hand-finished frames, creating a seamless interface between the physical and the digital world — invisible until needed, precise when it matters.
          </p>
          <div className={styles.featureSpecs}>
            {specs.map((s) => (
              <div key={s.label} className={styles.specItem}>
                <span className={styles.specLabel}>{s.label}</span>
                <span className={styles.specValue}>{s.value}</span>
              </div>
            ))}
          </div>
          <a href="mailto:fashion@baltar.ca" className={styles.btnBlack}>
            Request Access
          </a>
        </div>
      </section>

      {/* ── Statement ── */}
      <section className={styles.statementSection}>
        <p className={styles.statementQuote}>
          "To wear VR is to stand at the edge of two worlds — and choose, for the first time, to inhabit both."
        </p>
        <span className={styles.statementAttrib}>VR — Baltar Fashion, 2025</span>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerWordmark}>VR</div>
            <span className={styles.footerSub}>A Baltar Fashion House</span>
          </div>
          <nav className={styles.footerLinks}>
            <a href="mailto:fashion@baltar.ca">Contact</a>
            <a href="mailto:fashion@baltar.ca">Press</a>
            <Link href="/">Baltar Inc.</Link>
          </nav>
        </div>
        <div className={styles.footerBottom}>
          <span className={styles.footerCopyright}>
            © {new Date().getFullYear()} VR by Baltar Inc. All rights reserved.
          </span>
          <Link href="/" className={styles.footerParent}>
            Baltar Inc. ↗
          </Link>
        </div>
      </footer>

    </div>
  );
}
