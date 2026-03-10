import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

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

  // useEffect(() => {
  //   console.log('useEffect sem dependencias', Date.now());
  // }); // Executado toda vez que o componente renderiza na tela

  // useEffect(() => {
  //   console.log('useEffect com array deps vazio', Date.now());
  // }, []); // Executa apenas quando o React monta o componente na tela pela primeira vez

  useEffect(() => {
    console.log('Theme mudou para:', theme, Date.now());
    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      console.log('Olha, este componente será atualizado')
    }
  }, [theme]); // Executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
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
        <SunIcon />
      </a>
    </nav>
  );
}
