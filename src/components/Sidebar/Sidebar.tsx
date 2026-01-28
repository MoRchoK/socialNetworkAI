import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const menuItems = [
  { id: 'profile', label: 'Profile', path: '/profile' },
  { id: 'dialogs', label: 'Dialogs', path: '/dialogs' },
  { id: 'news', label: 'News', path: '/news' },
  { id: 'music', label: 'Music', path: '/music' },
  { id: 'settings', label: 'Settings', path: '/settings' },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {menuItems.map((item) => (
            <li key={item.id} className={styles.item}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
