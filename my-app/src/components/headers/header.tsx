// components/Header.tsx
import styles from './header.module.css';
import { FaSearch, FaHeart, FaShoppingBag, FaUser, FaBars } from 'react-icons/fa';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Верхняя полоса */}
      <div className={styles.topBar}>
        <div className={styles.leftLinks}>
          <span>📍 Київ</span>
          <a href="#">Про нас</a>
          <a href="#" className={styles.activeLink}>Акції</a>
          <a href="#">Новини</a>
          <a href="#">Служба підтримки</a>
        </div>
        <div className={styles.phoneNumber}>(044) 202 22 00</div>
      </div>

      {/* Средняя часть: логотип, поиск, иконки */}
      <div className={styles.middleBar}>
        <div className={styles.logo}>AИ</div>

        <div className={styles.searchBlock}>
          <input type="text" placeholder="Шукати товари..." />
          <button><FaSearch /></button>
        </div>

        <div className={styles.iconBlock}>
          <FaHeart />
          <FaShoppingBag />
          <FaUser />
        </div>
      </div>

      {/* Каталог товарів */}
      <div className={styles.catalogBar}>
        <FaBars />
        <span>Каталог товарів</span>
      </div>
    </header>
  );
}
