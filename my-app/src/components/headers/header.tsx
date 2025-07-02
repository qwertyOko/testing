import React from "react";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Image src="/logo.png" alt="Allures" width={48} height={32} className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <a href="#" className={styles.promo}>Акції</a>
        <a href="#">Про нас</a>
        <a href="#">Підтримка</a>
      </nav>
      <div className={styles.center}>
        <div className={styles.searchBox}>
          <input className={styles.searchInput} placeholder="Я шукаю..." />
          <span className={styles.searchIcon}>🔍</span>
        </div>
      </div>
      <div className={styles.icons}>
        <span className={styles.icon}>♡</span>
        <span className={styles.icon}>
          <Image src="/basket.png" alt="Basket" width={24} height={24} />
        </span>
        <span className={styles.icon}>👤</span>
      </div>
    </header>
  );
}