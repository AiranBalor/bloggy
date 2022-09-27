import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from '../lib/ThemesContext';
// создадим значение по умолчанию для темы, взяв его из хранилища и приведя к типу, либо, при отсутствии в хранилище ключа, используем светлую тему.
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.light;

const ThemesProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(defaultTheme);

  // поскольку контекст темы представляет собой объект, при перерисовке приложения каждый раз будет новый объект, вызывая повторную перерисовку.
  // используем мемоизацию для того, чтобы этого избежать
  const defaultContextProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultContextProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemesProvider;
