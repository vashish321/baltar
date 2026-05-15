'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './BaltarConsultingPage.module.css';

const U = 'https://images.unsplash.com/photo-';

const heroImg = `${U}1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80`;

const projects = [
  {
    name: 'Bay Street Tower',
    type: 'Structural Engineering',
    img: `${U}1545324418-cc1a3fa12c00?auto=format&fit=crop&w=900&q=80`,
  },
  {
    name: 'Harbourfront Complex',
    type: 'Civil Design',
    img: `${U}1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80`,
  },
  {
    name: 'Midtown Mixed-Use',
    type: 'Project Management',
    img: `${U}1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80`,
  },
];

const services = [
  {
    index: '01',
    title: 'Structural Engineering',
    desc: 'From foundational analysis to full structural design, we deliver engineered solutions that meet code and exceed performance expectations for commercial and residential builds.',
  },
  {
    index: '02',
    title: 'Civil & Site Design',
    desc: 'Site grading, drainage systems, utility coordination, and civil infrastructure — managed with precision from concept through permit approval.',
  },
  {
    index: '03',
    title: 'Project Management',
    desc: 'Turnkey construction project management: scope control, scheduling, contractor coordination, and quality assurance across all project phases.',
  },
  {
    index: '04',
    title: 'Technical Due Diligence',
    desc: 'Structural audits, condition assessments, and engineering reports for acquisitions, insurance, and regulatory compliance requirements.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Discovery & Assessment',
    desc: 'We begin with a thorough review of your project requirements, site conditions, and regulatory context.',
  },
  {
    num: '02',
    title: 'Engineering Design',
    desc: 'Our team develops stamped drawings, specifications, and coordination packages built for constructability.',
  },
  {
    num: '03',
    title: 'Construction Support',
    desc: 'We remain engaged through construction: RFI response, site reviews, and as-built documentation.',
  },
  {
    num: '04',
    title: 'Handover & Closeout',
    desc: 'Thorough closeout documentation, occupancy support, and post-occupancy consulting as required.',
  },
];

const tickerWords = [
  'Structural Engineering', 'Civil Design', 'Project Management', 'Due Diligence',
  'Structural Engineering', 'Civil Design', 'Project Management', 'Due Diligence',
];

export default function PageContent() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroImgWrap}>
          <Image src={heroImg} alt="Modern commercial building" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.heroEyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>Baltar Consultancy</span>
            </div>
            <h1 className={styles.heroHeading}>
              Baltar<br />Consulting
            </h1>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <div className={styles.heroStatNum}>120+</div>
                <span className={styles.heroStatLabel}>Projects Delivered</span>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.heroStatNum}>15+</div>
                <span className={styles.heroStatLabel}>Years Experience</span>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.heroStatNum}>$2B+</div>
                <span className={styles.heroStatLabel}>Project Value</span>
              </div>
            </div>
            <p className={styles.heroSub}>
              Structural, civil, and project management consulting for commercial, institutional, and residential projects across Canada.
            </p>
          </div>
        </div>
      </section>

      {/* ── Ticker ── */}
      <div className={styles.ticker}>
        <div className={styles.tickerInner}>
          {[...tickerWords, ...tickerWords].map((word, i) => (
            <span key={i} className={styles.tickerItem}>
              <span className={styles.tickerDiamond} />
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* ── Services ── */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionMeta}>
          <span className={styles.sectionNum}>01</span>
          <span className={styles.sectionRule} />
          <span className={styles.sectionLabel}>What We Do</span>
        </div>
        <h2 className={styles.sectionTitle}>
          Our Services
        </h2>
        <div className={styles.servicesGrid}>
          {services.map((s) => (
            <div key={s.index} className={styles.serviceCard}>
              <div className={styles.serviceIndex}>{s.index}</div>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.desc}</p>
              <span className={styles.serviceArrow}>→</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsHeader}>
          <div>
            <div className={styles.sectionMeta}>
              <span className={styles.sectionNum}>02</span>
              <span className={styles.sectionRule} />
              <span className={styles.sectionLabel}>Selected Work</span>
            </div>
            <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>Projects</h2>
          </div>
          <a href="mailto:consulting@baltar.ca" className={styles.projectsSeeAll}>
            All Projects →
          </a>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((p) => (
            <div key={p.name} className={styles.projectCard}>
              <div className={styles.projectImgWrap}>
                <Image src={p.img} alt={p.name} fill sizes="(max-width: 960px) 100vw, 66vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.projectOverlay} />
              <div className={styles.projectInfo}>
                <span className={styles.projectType}>{p.type}</span>
                <h3 className={styles.projectName}>{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Approach ── */}
      <section className={styles.approachSection}>
        <div className={styles.approachLeft}>
          <div className={styles.sectionMeta}>
            <span className={styles.sectionNum} style={{ color: 'rgba(255,255,255,0.3)' }}>03</span>
            <span className={styles.sectionRule} style={{ background: 'rgba(255,255,255,0.15)' }} />
            <span className={styles.sectionLabel} style={{ color: 'rgba(255,255,255,0.3)' }}>How We Work</span>
          </div>
          <h2 className={styles.approachHeading}>
            Our<br />Approach
          </h2>
          <p className={styles.approachBody}>
            Engineering projects succeed through process discipline. We follow a structured methodology from discovery through closeout, ensuring nothing falls through the gaps.
          </p>
          <a href="mailto:consulting@baltar.ca" className={styles.btnYellow}>
            Start a Project
          </a>
        </div>
        <div className={styles.approachRight}>
          <div className={styles.steps}>
            {steps.map((s) => (
              <div key={s.num} className={styles.step}>
                <span className={styles.stepNum}>{s.num}</span>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>{s.title}</h4>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerWordmark}>Baltar Consulting</div>
            <span className={styles.footerSub}>A Baltar Consultancy Company</span>
          </div>
          <nav className={styles.footerLinks}>
            <a href="#services">Services</a>
            <a href="mailto:consulting@baltar.ca">Contact</a>
            <Link href="/">Baltar Inc.</Link>
          </nav>
        </div>
        <div className={styles.footerBottom}>
          <span className={styles.footerCopyright}>
            © {new Date().getFullYear()} Baltar Consulting. All rights reserved.
          </span>
          <Link href="/" className={styles.footerParent}>
            Baltar Inc. ↗
          </Link>
        </div>
      </footer>

    </div>
  );
}
