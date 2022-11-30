import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import classes from './ArticleCreatePage.module.scss';

export interface ArticleCreatePageProps {
  className?: string
}

export const ArticleCreatePage = memo(({ className }: ArticleCreatePageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.ArticleCreatePage, {}, [className])}>
    </div>
  );
});