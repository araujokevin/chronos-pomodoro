import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //Não segue o link

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';

      return nextTheme;
    });

    // document.documentElement.setAttribute('data-theme', theme);
  }

  // useEffect(() => {
  //   console.log('Sem depêndencia', Date.now());
  // }); //Executado toda vez que o componente é renderizado na tela

  // useEffect(() => {
  //   console.log('useEffect com array deps vazia', Date.now());
  // }, []); //Executa apenas quando o React monta o componente na tela pela primeira vez

  // useEffect(() => {
  //   console.log('Theme mudou', theme, Date.now());
  // }, [theme]); //Executa apenas quando o valor de theme muda

  useEffect(() => {
    console.log('Theme mudou', theme, Date.now());
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
