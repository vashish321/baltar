'use client';

import styles from './TransacComingSoon.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function TransacComingSoon() {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <Image src="/logo.svg" alt="Transac Logo" width={52} height={52} className={styles.logo} />
        <h1 className={styles.heading}>Page Coming Soon</h1>
        <p className={styles.subtext}>
          We’re working behind the scenes to launch this page. Thanks for your patience!
        </p>
        <Link href="/transac" className={styles.backButton}>
          ← Back to Transac Home
        </Link>
      </div>
    </section>
  );
}
