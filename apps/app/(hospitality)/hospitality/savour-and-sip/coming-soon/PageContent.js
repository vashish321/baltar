'use client';

import { motion } from 'framer-motion';
import styles from './ComingSoon.module.css';

export default function ComingSoonPage() {
  return (
    <div className={styles.comingSoonContainer}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.heading}>Coming Soon.</h1>
        <p className={styles.subheading}>
          Our chefs are still sharpening their knives... 🍴
        </p>
        <p className={styles.description}>
          Something delicious is being cooked up behind the scenes.  
          Stay tuned, stay hungry, and stay fabulous.
        </p>
      </motion.div>
    </div>
  );
}
