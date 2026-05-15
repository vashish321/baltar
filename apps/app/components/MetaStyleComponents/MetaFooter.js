'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './MetaFooter.module.css';

const footerSections = {
  'Technologies': [
    { name: 'Toronto Media Inc.', href: '/technologies/toronto-media-inc' },
    { name: 'Frontend Media Inc.', href: '/technologies/frontend-media' },
    { name: 'Transac', href: '/finance/transac' },
  ],
  'Consultancy': [
    { name: 'Baltar Consulting', href: '/consulting/baltar-engineering' },
    { name: 'Baltar International', href: '/consulting/baltar-international' },
  ],
  'Brands': [
    { name: 'Savour & Sip', href: '/hospitality/savour-and-sip' },
    { name: 'VR', href: '/fashion/vr' },
  ],
  'Company': [
    { name: 'Contact', href: '/contact-us' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ],
};

export default function MetaFooter() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          {/* Main Footer Content */}
          <div className={styles.mainContent}>
            {/* Company Info */}
            <motion.div className={styles.companySection} variants={itemVariants}>
              <h3 className={styles.companyName}>Baltar Inc</h3>
              <p className={styles.companyTagline}>One Company. Limitless Services.</p>
              <p className={styles.companyDescription}>
                A Canadian multi-division company operating across technology, hospitality, fashion, and consultancy — built to deliver at every level.
              </p>
              <div className={styles.companyContact}>
                <span>Toronto, ON</span>
                <a href="mailto:admin@baltar.ca" className={styles.contactEmail}>admin@baltar.ca</a>
              </div>
            </motion.div>

            {/* Footer Links */}
            <div className={styles.linksGrid}>
              {Object.entries(footerSections).map(([section, links]) => (
                <motion.div key={section} className={styles.linkSection} variants={itemVariants}>
                  <h4 className={styles.sectionTitle}>{section}</h4>
                  <ul className={styles.linkList}>
                    {links.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href} className={styles.footerLink}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div className={styles.bottomBar} variants={itemVariants}>
            <div className={styles.bottomContent}>
              <div className={styles.copyright}>
                <span>© {currentYear} Baltar Inc. All rights reserved.</span>
              </div>
              
              <div className={styles.legalLinks}>
                <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
                <Link href="/terms-of-service" className={styles.legalLink}>Terms of Service</Link>
              </div>

              <div className={styles.location}>
                <span>Toronto, ON · Canada</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
