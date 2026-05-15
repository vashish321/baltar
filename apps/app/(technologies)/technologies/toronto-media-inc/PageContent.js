'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './TMIPage.module.css';

const EASE = [0.16, 1, 0.3, 1];

const services = [
  {
    num: '01',
    title: 'Web Design & Development',
    desc: 'Custom sites built clean and fast. We handle everything from initial design through launch — no templates, no shortcuts, no bloated builders.',
  },
  {
    num: '02',
    title: 'SEO & Content Strategy',
    desc: 'Keyword research, on-page optimisation, and content audits built around how your customers actually search — not keyword stuffing.',
  },
  {
    num: '03',
    title: 'AI Site Audits',
    desc: 'A full technical and content review of your existing site — Core Web Vitals, accessibility gaps, and conversion blockers — delivered within 48 hours.',
  },
  {
    num: '04',
    title: 'Ongoing Maintenance',
    desc: 'Monthly or annual care plans covering updates, security monitoring, performance checks, and dedicated support. Your site stays fast, safe, and current.',
  },
];

const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '40+', label: 'Happy Clients' },
  { value: '3×', label: 'Avg. Performance Lift' },
  { value: '24/7', label: 'Ongoing Support' },
];

const workItems = [
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    label: 'E-Commerce',
  },
  {
    src: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
    label: 'SaaS Product',
  },
  {
    src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    label: 'Brand Identity',
  },
];

function ServiceRow({ num, title, desc, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-5% 0px' });

  return (
    <motion.div
      ref={ref}
      className={styles.serviceRow}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: EASE }}
    >
      <span className={styles.serviceNum}>{num}</span>
      <div className={styles.serviceBody}>
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceDesc}>{desc}</p>
      </div>
      <span className={styles.serviceArrow}>→</span>
    </motion.div>
  );
}

export default function FrontendWebDesignPage() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-10% 0px' });

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.gridBg} />

        <div className={styles.heroInner}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            Baltar Technologies — Toronto Media Inc.
          </motion.span>

          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
          >
            Your Site Should<br />Earn Its Place<br />on the Internet.
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
          >
            Web design, SEO strategy, and ongoing site care for Canadian
            businesses that take their digital presence seriously.
          </motion.p>

          <motion.div
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.56, ease: EASE }}
          >
            <a href="mailto:tech@baltar.ca" className={styles.btnPrimary}>
              Start a Project
            </a>
            <Link href="/technologies/toronto-media-inc/portfolio" className={styles.btnSecondary}>
              View Work
            </Link>
          </motion.div>
        </div>

        <div className={styles.heroImgWrap}>
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
            alt=""
            fill
            priority
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroImgOverlay} />
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className={styles.statsSection}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className={styles.statItem}
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.09, ease: EASE }}
          >
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </motion.div>
        ))}
      </section>

      {/* Services */}
      <section className={styles.servicesSection}>
        <span className={styles.sectionTag}>// services</span>
        <h2 className={styles.sectionHeading}>How We Work</h2>
        <div>
          {services.map((svc, i) => (
            <ServiceRow key={svc.num} {...svc} index={i} />
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className={styles.workSection}>
        <span className={styles.sectionTag}>// portfolio</span>
        <h2 className={styles.sectionHeading}>Selected Work</h2>
        <div className={styles.workGrid}>
          {workItems.map((item, i) => (
            <div key={i} className={styles.workCard}>
              <div className={styles.workImgWrap}>
                <Image
                  src={item.src}
                  alt=""
                  fill
                  priority
                  sizes="33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.workOverlay} />
              </div>
              <span className={styles.workLabel}>{item.label}</span>
            </div>
          ))}
        </div>
        <div className={styles.workCta}>
          <Link href="/technologies/toronto-media-inc/portfolio" className={styles.btnSecondary}>
            See All Projects
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Got a Site<br />That Needs Work?</h2>
        <p className={styles.ctaSub}>
          Send us a note. No intake forms, no sales cycle — just a conversation.
        </p>
        <a href="mailto:tech@baltar.ca" className={styles.btnPrimary}>
          Drop Us a Line
        </a>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <span className={styles.footerBrand}>Toronto Media Inc.</span>
          <nav className={styles.footerNav}>
            <Link href="/technologies/toronto-media-inc/services">Services</Link>
            <Link href="/technologies/toronto-media-inc/portfolio">Work</Link>
            <Link href="/technologies/toronto-media-inc/pricing">Pricing</Link>
            <Link href="/technologies/toronto-media-inc/about">About</Link>
            <Link href="/technologies/toronto-media-inc/contact">Contact</Link>
          </nav>
        </div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Toronto Media Inc. — A Baltar Inc. Company</span>
          <Link href="/" className={styles.footerParent}>← Baltar Inc.</Link>
        </div>
      </footer>
    </div>
  );
}
