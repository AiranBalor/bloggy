import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

export const MainPage = () => {
  // полезно разделять объем текстов для перевода на отдельные чанки, которые будут подгружаться асинхронно
  // при загрузке отдельных страниц. Для этого надо создать отдельный файл с переводами для конкретной страницы,
  // а в параметр хука перевода указать название этого файла
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Главная страница')}
      <BugButton />
    </div>

  );
};
export default MainPage;
