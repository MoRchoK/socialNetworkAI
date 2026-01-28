import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/vite.svg" alt="Logo" className={styles.logoImage} />
        <span className={styles.logoText}>Social Network</span>
      </div>
    </header>
  );
}

export default Header;
