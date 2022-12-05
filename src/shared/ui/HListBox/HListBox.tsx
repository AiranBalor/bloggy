import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
  Fragment, memo, ReactNode, useState,
} from 'react';
import { Listbox } from '@headlessui/react';
import CheckIcon from 'shared/assets/icons/CheckIcon.svg';
import { useTranslation } from 'react-i18next';
import classes from './HListBox.module.scss';
import { Icon } from '../Icon/Icon';
import { HStack } from '../Stack';
import { Button } from '../Button/Button';

type DropdownDirection = 'bottom' | 'top'

export interface ListBoxItem {
  value: string;
  content: ReactNode
  disabled?: boolean
}

export interface HListBoxProps {
  className?: string
  items?: ListBoxItem[]
  value?: string;
  defaultValue?: string
  onChange?: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection
  label?: string
}

export const HListBox = memo((props: HListBoxProps) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom',
    label,
  } = props;

  const optionClasses = [classes[direction]];

  // нужно указывать as для типа элемента, иначе
  // он про аттрибуты типа className ничего не знает
  return (
    <HStack>
      {label && <span>{label}</span> }
      <Listbox
        as="div"
        className={classNames(classes.HListBox, {}, [className])}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={readonly}
      >

        <Listbox.Button disabled={readonly} className={classes.trigger}>
          <Button className={classes.selectBtn} disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </Listbox.Button>
        <Listbox.Options className={classNames(classes.selectList, {}, optionClasses)}>
          {items?.map(({ value, content, disabled = false }) => (
            <HStack align="center">
              <Listbox.Option
                key={value}
                value={value}
                disabled={disabled}
                as={Fragment}
              >
                {({ active, selected, disabled }) => (
                  <li
                    className={classNames(
                      classes.selectItem,
                      { [classes.active]: active, [classes.disabled]: disabled },
                    )}
                  >
                    <HStack align="center">
                      {selected && <Icon Svg={CheckIcon} className={classes.selectIcon} /> }
                      {content}
                    </HStack>
                  </li>
                )}
              </Listbox.Option>
            </HStack>
          ))}
        </Listbox.Options>
      </Listbox>
    </HStack>

  );
});
