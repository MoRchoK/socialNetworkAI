import styles from './Sidebar.module.scss';

const menuItems = [
  { id: 'profile', label: 'Profile' },
  { id: 'message', label: 'Message' },
  { id: 'news', label: 'News' },
  { id: 'music', label: 'Music' },
  { id: 'settings', label: 'Settings' },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {menuItems.map((item) => (
            <li key={item.id} className={styles.item}>
              <a href={`#${item.id}`} className={styles.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
