import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

export const AppRouter = () => {
  const { t } = useTranslation();
  // Вынесем роуты из компонента App, чтобы вместо прямого создания роутов в компонентах описывать их в файле конфигурации и далее передавать по всему приложению
  // Здесь получим объект конфигурации и вытащим из него значения ключей, из которых сгенерим сами Routes
  return (
    <Suspense fallback={<div>{t('Loading')}</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
