import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nTestConfig from 'shared/config/i18n/i18nTestConfig';

// данная функция необходим для работы с отдельной конфигурацией i18n для тестировния
// он получает компонент на вход компонент и оборачивает его в i18n провайдер
export function renderWithTranslation(component: ReactNode) {
  return render(
    <I18nextProvider i18n={i18nTestConfig}>
      {component}
    </I18nextProvider>,
  );
}
