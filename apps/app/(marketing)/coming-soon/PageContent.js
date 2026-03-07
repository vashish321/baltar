'use client';
import Link from 'next/link';
import styles from './coming-soon.module.css';

export default function ComingSoonPage() {
  return (
    <div className={styles.container}>
      <div className={styles.glowBox}>
        <h1 className={styles.title}>🔥 Coming Soon</h1>
        <p className={styles.subtitle}>
          We're crafting something <span className={styles.funky}>legendary</span> for you.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.btn}>Notify Me</button>
          <Link href="/" className={styles.btnSecondary}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
