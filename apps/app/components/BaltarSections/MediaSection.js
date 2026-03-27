'use client';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import styles from './MediaSection.module.css';

export default function MediaSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);

  useEffect(() => {
    if (videoRef.current && isInView) {
      videoRef.current.play();
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -120, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 120, rotate: 5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Background Video */}
      <motion.div 
        className={styles.videoContainer}
        style={{ scale: videoScale }}
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className={styles.backgroundVideo}
        >
          <source src="/video/media.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay} />
      </motion.div>

      {/* Content */}
      <motion.div 
        className={styles.content}
        style={{ y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <h2 className={styles.sectionTitle}>Baltar Media</h2>
          <p className={styles.sectionSubtitle}>Research | News | Digital Reach</p>
        </motion.div>

        <div className={styles.servicesGrid}>
          {/* Consumer Pulse */}
          <motion.div className={styles.serviceCard} variants={slideInFromLeft}>
            <div className={styles.cardContent}>
              <h3>Consumer Pulse</h3>
              <p>
                Real-time polling, audience research, and sentiment analysis tools for businesses and organizations.
              </p>
              <ul className={styles.featureList}>
                <li>AI-analyzed consumer surveys and feedback loops</li>
                <li>Real-time dashboards with downloadable reports</li>
                <li>Business-tier API access for ongoing analytics integration</li>
                <li>Data-driven insights to improve products, marketing, and service design</li>
              </ul>
              <p className={styles.serviceDescription}>
                Get clarity on what your audience really thinks—backed by live data.
              </p>
              <a
                href="/media/consumer-pulse"
                className={styles.serviceLink}
              >
                Explore Consumer Pulse →
              </a>
            </div>
          </motion.div>

          {/* Baltar Editorial — coming next */}
          <motion.div className={styles.serviceCard} variants={slideInFromRight}>
            <div className={styles.cardContent}>
              <h3>Baltar Editorial</h3>
              <p>
                A long-form content and media production studio for brands that want to tell real stories.
              </p>
              <ul className={styles.featureList}>
                <li>Ghostwritten articles, op-eds, and whitepapers for executives</li>
                <li>Brand journalism and sponsored editorial campaigns</li>
                <li>SEO-optimized content strategies built for organic growth</li>
                <li>Multimedia production: short-form video, audio, and visual series</li>
              </ul>
              <p className={styles.serviceDescription}>
                Built for founders, agencies, and organizations that need content that actually earns attention.
              </p>
              <a
                href="/contact-us"
                className={styles.serviceLink}
              >
                Get in Touch →
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
