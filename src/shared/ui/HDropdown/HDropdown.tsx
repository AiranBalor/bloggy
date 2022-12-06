import { useTranslation } from 'react-i18next';
import { Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import classes from './HDropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';

export interface DropdownItem {
  disabled?: boolean
  content: string
  onClick?: () => void
  href?: string
}

interface HDropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
  direction?: DropdownDirection
}

export const HDropdown = memo((props: HDropdownProps) => {
  const {
    className, items, trigger, direction = 'bottom_right',
  } = props;

  const menuClasses = [classes[direction]];

  return (
    <Menu as="div" className={classNames(classes.HDropdown, {}, [className])}>
      <Menu.Button className={classes.btn}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(classes.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: {active: boolean}) => (
            <button
              type="button"
              className={classNames(
                classes.item,
                { [classes.active]: active },
              )}
              disabled={item.disabled}
              onClick={item.onClick}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});
