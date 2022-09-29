import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import classes from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const toggleSideBar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={classNames(
        classes.SideBar,
        { [classes.collapsed]: collapsed },
        [className],
      )}
    >
      <Button onClick={toggleSideBar}>{t('Collapse')}</Button>
      <div className={classes.switchers}>
        <LangSwitcher className={classes.lang} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
