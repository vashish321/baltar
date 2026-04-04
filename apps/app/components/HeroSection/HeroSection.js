'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './HeroSection.module.css';

const EASE = [0.16, 1, 0.3, 1];
const STAGGER = 0.15;

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  };
}

export default function HeroSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -60]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.75;
  }, []);

  const scrollToDivisions = () => {
    document.getElementById('divisions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className={styles.hero}>
      {/* Background video with parallax scale */}
      <motion.div className={styles.videoWrap} style={{ scale: videoScale }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </motion.div>

      {/* Content — fades out on scroll */}
      <motion.div
        className={styles.content}
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Eyebrow */}
        <motion.span className={styles.eyebrow} {...fadeUp(0.3)}>
          BALTAR INC.
        </motion.span>

        {/* H1 */}
        <motion.h1 className={styles.heading} {...fadeUp(0.3 + STAGGER)}>
          Engineering Growth<br />Across Industries.
        </motion.h1>

        {/* Subtext */}
        <motion.p className={styles.sub} {...fadeUp(0.3 + STAGGER * 2)}>
          One Integrated Network.
        </motion.p>

        {/* CTAs */}
        <motion.div className={styles.ctas} {...fadeUp(0.3 + STAGGER * 3)}>
          <button className={styles.ctaPrimary} onClick={scrollToDivisions}>
            Explore Divisions
          </button>
          <Link href="/about" className={styles.ctaSecondary}>
            Learn Our Story →
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6, ease: EASE }}
      >
        <motion.div
          className={styles.scrollBar}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
