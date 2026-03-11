import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'
    return storageTheme
  });

  const nextThemeIcon = {
    dark : <SunIcon/>,
    light: <MoonIcon/>, 
  }

  function handleThemeSwap(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });

    document.documentElement.setAttribute('data-theme', theme);
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles['menu-link']}
        href='#'
        aria-label='Ir para a página "Home".'
        title='Ir para a página "Home".'
      >
        <HouseIcon />
      </a>

      <a
        className={styles['menu-link']}
        href='#'
        aria-label='Ver histórico.'
        title='Histórico'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles['menu-link']}
        href='#'
        aria-label='Configurações.'
        title='Configurações'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles['menu-link']}
        href='#'
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleThemeSwap}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
