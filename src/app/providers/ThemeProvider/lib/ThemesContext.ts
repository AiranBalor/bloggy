import { createContext } from 'react';
// определим набор тем в приложении
export enum Themes {
  light = 'light',
  dark = 'dark'
}
// опишем типы для контекста цветовых тем - саму текущую тему и функцию-переключатель
export interface ThemeContextProps {
  theme?: Themes,
  setTheme?: (theme: Themes) => void
}
// будет обращаться в локальное хранилище за значением текущей темы для сохранения при перезагрузке приложения
export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextProps>({});
