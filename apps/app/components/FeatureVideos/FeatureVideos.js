'use client';
import styles from './FeatureVideos.module.css';
import { useEffect, useRef } from 'react';

const services = [
  {
    name: 'Baltar Finance',
    video: '/video/finance.mp4',
    subsidiaries: [
      { name: 'Wealth Management', desc: 'Helping you grow and protect your assets.', cta: 'Manage Wealth' },
      { name: 'Transac', desc: 'Digital receipts and loyalty tools for businesses.', cta: 'Visit Transac' },
    ],
  },
  {
    name: 'Baltar Technology',
    video: '/video/technology.mp4',
    subsidiaries: [
      { name: 'Toronto Media Inc.', desc: 'Full-stack web design and development for modern brands.', cta: 'View Services' },
      { name: 'Transac', desc: 'Digital receipts and loyalty tools for businesses.', cta: 'Visit Transac' },
    ],
  },
  {
    name: 'Baltar Consulting',
    video: '/video/consulting.mp4',
    subsidiaries: [
      { name: 'Archon Engineering', desc: 'Digital infra for bold firms.', cta: 'Consult Us' },
    ],
  },
  {
    name: 'Baltar Hospitality',
    video: '/video/hospitality.mp4',
    subsidiaries: [
      { name: 'Savour & Sip', desc: 'Reinventing dining experiences.', cta: 'Dine With Us' },
    ],
  },
  {
    name: 'Baltar Fashion',
    video: '/video/fashion.mp4',
    subsidiaries: [
      { name: 'VR (Luxury Eyewear & Fashion Tech)', desc: 'Augmented style & wearable elegance.', cta: 'View Collections' },
      { name: 'Le Mode Co.', desc: 'A new way to fashion.', cta: 'Explore Brand' },
    ],
  },
  {
    name: 'Baltar Media',
    video: '/video/media.mp4',
    subsidiaries: [
      { name: 'Consumer Pulse', desc: 'Real-time news, polling, and audience research tools.', cta: 'Explore Now' },
    ],
  },
  {
    name: 'Baltar Retail',
    video: '/video/retail.mp4',
    subsidiaries: [
      { name: 'Baltar Prime', desc: 'The future of commerce, now.', cta: 'Shop Smart' },
    ],
  },
];

export default function FeatureVideos() {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.add(styles.zoomIn);
            // Play video lazily when it scrolls into view
            if (target.paused) {
              target.play().catch(() => {}); // Ignore autoplay policy errors
            }
          } else {
            target.classList.remove(styles.zoomIn);
            if (!target.paused) {
              target.pause();
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    videoRefs.current.forEach((el) => el && observer.observe(el));
    return () => videoRefs.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  const getHref = (name) => {
    const lower = name.toLowerCase();
    if (lower === 'transac') return '/finance/transac';
    if (lower === 'toronto media inc.') return '/technologies/toronto-media-inc';
    if (lower === 'frontend web design') return '/technologies/toronto-media-inc';
    if (lower === 'savour & sip') return '/hospitality/savour-and-sip';
    if (lower === 'le mode co.') return '/fashion/le-mode-co';
    if (lower === 'vr (luxury eyewear & fashion tech)') return '/fashion/vr';
    if (lower === 'consumer pulse') return '/media/consumer-pulse';
    if (lower === 'archon engineering') return '/consulting/baltar-engineering';
    if (lower === 'wealth management') return '/baltar-finance-comingsoon';
    return '/coming-soon';
  };

  return (
    <section className={styles.featureSection}>
      <h2 className={styles.sectionHeading}>Services Provided by Baltar Inc.</h2>
      {services.map((service, index) => (
        <div key={index} className={styles.serviceBlock}>
          <h3 className={styles.serviceTitle}>{service.name}</h3>

          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={service.video}
            className={styles.video}
            muted
            loop
            playsInline
            preload="none"
          />

          <div className={styles.subsidiaries}>
            {service.subsidiaries.map((sub, i) => {
              const href = getHref(sub.name);
              const openInNewTab = href !== '/coming-soon';

              return (
                <div key={i} className={styles.subCard}>
                  <h4>{sub.name}</h4>
                  <p>{sub.desc}</p>
                  {openInNewTab ? (
                    <a
                      href={href}
                      className={styles.subButton}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {sub.cta}
                    </a>
                  ) : (
                    <a href={href} className={styles.subButton}>
                      {sub.cta}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
