import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './AppLink.module.scss';
// опишем темы для ссылок, которые будут использоваться по всему приложению
enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
// типы для ссылок
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
// сам компонент. Из типа LinkProps вытащим children и to, а также собственные пропсы
export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps
  } = props;
  return (
    <Link
      className={classNames(classes.AppLink, {}, [className, classes[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
