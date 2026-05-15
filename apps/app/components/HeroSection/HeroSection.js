'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

const EASE = [0.16, 1, 0.3, 1];

export default function HeroSection() {
  const scrollToDivisions = () => {
    document.getElementById('divisions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      {/* Background image */}
      <div className={styles.imgWrap}>
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Gradient overlay: dark at top & bottom, lighter in middle */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          BALTAR INC.
        </motion.span>

        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
        >
          One Company.<br />Limitless Services.
        </motion.h1>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
        >
          Technology. Hospitality. Fashion. Consultancy.
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
        >
          <button className={styles.ctaPrimary} onClick={scrollToDivisions}>
            Explore Divisions
          </button>
          <Link href="/contact-us" className={styles.ctaSecondary}>
            Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className={styles.scrollCue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.div
          className={styles.scrollBar}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
