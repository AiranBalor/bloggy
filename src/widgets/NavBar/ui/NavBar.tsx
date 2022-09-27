import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import classes from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => (
  <div className={classNames(classes.Navbar, {}, [className])}>
    <div className={classes.navLinks}>
      <AppLink className={classes.navLink} to="/">На главную</AppLink>
      <AppLink to="/about">О проекте</AppLink>
    </div>
  </div>
);
