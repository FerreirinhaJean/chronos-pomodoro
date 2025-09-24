import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  return (
    <>
      <nav className={styles.menu}>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='Ir para a Home'
          title='Ir para a Home'
        >
          <HouseIcon />
        </a>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='Visualizar Histórico'
          title='Visualizar Histórico'
        >
          <HistoryIcon />
        </a>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='Configurações'
          title='Configurações'
        >
          <SettingsIcon />
        </a>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='Alterar Tema'
          title='Alterar Tema'
          onClick={handleThemeChange}
        >
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
}
