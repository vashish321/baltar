'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './FMIPage.module.css';

const EASE = [0.16, 1, 0.3, 1];

const services = [
  {
    num: '01',
    title: 'React & Next.js Development',
    desc: 'Lightning-fast, SEO-ready web apps built with the modern React ecosystem — server components, streaming, and edge rendering.',
  },
  {
    num: '02',
    title: 'UI/UX Engineering',
    desc: 'Pixel-perfect interfaces with smooth animations, accessibility-first markup, and design systems that scale.',
  },
  {
    num: '03',
    title: 'API Integration & Full-Stack',
    desc: 'Connect your frontend to any backend — REST, GraphQL, Supabase, or custom APIs — with clean, typed integrations.',
  },
  {
    num: '04',
    title: 'Performance Optimization',
    desc: 'Core Web Vitals audits, bundle analysis, image optimization, and caching strategies for sub-second load times.',
  },
];

const stats = [
  { value: '50+', label: 'Apps Shipped' },
  { value: '99', label: 'Lighthouse Score' },
  { value: '<1s', label: 'Target Load Time' },
  { value: '100%', label: 'TypeScript-Ready' },
];

const workItems = [
  {
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    label: 'Web Application',
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    label: 'Dashboard UI',
  },
  {
    src: 'https://images.unsplash.com/photo-1587620962725-abab19836100?auto=format&fit=crop&w=800&q=80',
    label: 'Developer Tools',
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

export default function FrontendMediaPage() {
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
            Frontend Media Inc. — Modern Web Development
          </motion.span>

          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
          >
            Ship Faster.<br />Perform Better.<br />Scale Further.
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
          >
            React, Next.js, and full-stack development for startups and
            enterprises that demand exceptional frontend quality.
          </motion.p>

          <motion.div
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.56, ease: EASE }}
          >
            <Link href="/technologies/toronto-media-inc/contact" className={styles.btnPrimary}>
              Start a Project
            </Link>
            <Link href="/technologies/toronto-media-inc/portfolio" className={styles.btnSecondary}>
              View Work
            </Link>
          </motion.div>
        </div>

        <div className={styles.heroImgWrap}>
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
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
        <h2 className={styles.sectionHeading}>What We Build</h2>
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
        <h2 className={styles.ctaHeading}>Let's Build<br />Something Fast.</h2>
        <p className={styles.ctaSub}>
          Tell us what you're building. We'll tell you how to make it exceptional.
        </p>
        <Link href="/technologies/toronto-media-inc/contact" className={styles.btnPrimary}>
          Book a Free Call
        </Link>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <span className={styles.footerBrand}>Frontend Media Inc.</span>
          <nav className={styles.footerNav}>
            <Link href="/technologies/frontend-media">Home</Link>
            <Link href="/technologies/toronto-media-inc/portfolio">Work</Link>
            <Link href="/technologies/toronto-media-inc/pricing">Pricing</Link>
            <Link href="/technologies/toronto-media-inc/contact">Contact</Link>
          </nav>
        </div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Frontend Media Inc. — A Baltar Inc. Company</span>
          <Link href="/" className={styles.footerParent}>← Baltar Inc.</Link>
        </div>
      </footer>
    </div>
  );
}
