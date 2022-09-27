import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>{t('О проекте')}</div>
  );
};
export default AboutPage;
