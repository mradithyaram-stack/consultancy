import React from 'react';
import Link from 'next/link';
import styles from './layout.module.css';

export default function TopStrip() {
  return (
    <div className={styles.topStrip}>
      <div className={`container ${styles.topStripContainer}`}>
        <div className={styles.topStripLeft}>
          <span>📞 +91-9000329999</span>
          <span>📍 Hitech City, Hyderabad</span>
        </div>
        <div className={styles.topStripRight}>
          <Link href="https://wa.me/919000329999" target="_blank">
            🟢 WhatsApp Click
          </Link>
        </div>
      </div>
    </div>
  );
}
