import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import classes from './AdminPanelPage.module.scss';

export interface AdminPanelPageProps {
  className?: string
}

const AdminPanelPage = memo(({ className }: AdminPanelPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.AdminPanelPage, {}, [className])}>
      Admin panel page
    </div>
  );
});

export default AdminPanelPage;
