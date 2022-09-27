import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from './ThemesContext';
// объявим тип для кастомного хука, который будет использоваться в приложении, избавляя наш UI от всякой работы с логикой контекста
interface useThemeResult {
  toggleTheme: () => void;
  theme: Themes
}

export const useTheme = ():useThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Themes.light ? Themes.dark : Themes.light;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
