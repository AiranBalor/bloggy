import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';
// опишем перечисление названий путей (новые названия пути будут добавляться сюда)
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}
// опишем типы и сами пути для каждого названия(прим. => нельзя ли генерить их автоматом через map?)
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  // держать последним в конфиге. Отрабатывает, если ни один другой роут не сработал
  [AppRoutes.NOT_FOUND]: '*',
};
// сам файл конфигурации, который отдаем наверх: объект, где для каждого наименования путей создается объект с настройками для роута. Ух, башка-отвал.
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
