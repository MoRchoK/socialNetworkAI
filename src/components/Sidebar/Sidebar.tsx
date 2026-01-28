import { NavLink } from 'react-router-dom';
import { state } from '../../redux';
import styles from './Sidebar.module.scss';

function Sidebar() {
  const { menuItems } = state.sidebar;

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
