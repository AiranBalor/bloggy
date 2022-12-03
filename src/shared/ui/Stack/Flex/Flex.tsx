import { memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Flex.module.scss';

export type FlexJustify = 'start' | 'end' | 'center' | 'between';
export type FlexAlign = 'start' | 'end' | 'center';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

// маппер
const justifyClasses: Record<FlexJustify, string> = {
  start: classes.justifyStart,
  end: classes.justifyEnd,
  center: classes.justifyCenter,
  between: classes.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: classes.alignStart,
  end: classes.alignEnd,
  center: classes.alignCenter,
};

const directionClasses: Record<FlexDirection, string> = {
  row: classes.directionRow,
  column: classes.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: classes.gap4,
  8: classes.gap8,
  16: classes.gap16,
  32: classes.gap32,
};

export interface FlexProps {
  className?: string
  children: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction: FlexDirection
  gap?: FlexGap
  fullWidth?: boolean
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    align = 'center',
    justify = 'start',
    direction = 'row',
    gap = 8,
    fullWidth = true,
  } = props;

  const classesArr = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [classes.fullWidth]: fullWidth,
  };

  return (
    <div className={classNames(classes.Flex, mods, classesArr)}>
      {children}
    </div>
  );
};
