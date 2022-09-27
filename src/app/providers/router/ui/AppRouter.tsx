import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
  // Вынесем роуты из компонента App, чтобы вместо прямого создания роутов в компонентах описывать их в файле конфигурации и далее передавать по всему приложению
  // Здесь получим объект конфигурации и вытащим из него значения ключей, из которых сгенерим сами Routes
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={<div className="page-wrapper">{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>;
};
