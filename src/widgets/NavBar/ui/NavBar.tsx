import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import classes from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.navLinks}>
        <AppLink className={classes.navLink} to="/">{t('На главную')}</AppLink>
        <AppLink to="/about">{t('О проекте')}</AppLink>
      </div>
    </div>
  );
};
