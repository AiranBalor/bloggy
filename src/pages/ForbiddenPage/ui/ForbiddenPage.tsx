import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import classes from './ForbiddenPage.module.scss';

export interface ForbiddenPageProps {
  className?: string
}

export const ForbiddenPage = memo(({ className }: ForbiddenPageProps) => {
  const { t } = useTranslation('forbiddenPage');
  return (
    <Page className={classNames(classes.ForbiddenPage, {}, [className])}>
      {t('You dont have access to this page')}
    </Page>
  );
});
