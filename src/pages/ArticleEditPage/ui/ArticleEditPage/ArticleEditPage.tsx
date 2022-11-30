import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import { useParams } from 'react-router-dom';
import classes from './ArticleEditPage.module.scss';

export interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string} >();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(classes.ArticleEditPage, {}, [className])}>
      {isEdit ? 'Article edit page' : 'Article create page'}
    </Page>
  );
});

export default ArticleEditPage;
