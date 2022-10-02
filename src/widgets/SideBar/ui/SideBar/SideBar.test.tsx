import { screen, fireEvent } from '@testing-library/react';
import { renderWithTranslation } from
  'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { SideBar } from 'widgets/SideBar';

describe('SideBar tests', () => {
  test('test SideBar render', () => {
    // использование withTranslation необходимо для корректной работы с переводимыми текстами при тестировании
    // const SideBarWithTranslation = withTranslation()(SideBar);

    // здесь функция обертка получает тестируемый компонент и заворачивает его в провайдер с конфигурацией переводов
    // далее проверяется, есть ли компонент с тестовым id в документе (моковый тест, как по мне)
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderWithTranslation(<SideBar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
