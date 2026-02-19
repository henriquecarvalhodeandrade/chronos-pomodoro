import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles['menu-link']} href='#'>
        <HouseIcon/>
      </a>

      <a className={styles['menu-link']} href='#'>
        <HistoryIcon/>
      </a>

      <a className={styles['menu-link']} href='#'>
        <SettingsIcon/>
      </a>

      <a className={styles['menu-link']} href='#'>
        <SunIcon/>
      </a>
    </nav>
  );
}
