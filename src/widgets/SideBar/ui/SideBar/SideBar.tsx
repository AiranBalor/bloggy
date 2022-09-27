import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import classes from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

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
      <Button onClick={toggleSideBar}>Скрыть</Button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.lang} />
      </div>
    </div>
  );
};
