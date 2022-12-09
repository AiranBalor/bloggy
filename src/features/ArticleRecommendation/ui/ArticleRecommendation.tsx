import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { rtkApi } from 'shared/api/rtkApi';
import { useArticleRecommendations } from '../api/articleRecommendationsApi';

export interface ArticleRecommendationProps {
  className?: string
}

export const ArticleRecommendation = memo(({ className }: ArticleRecommendationProps) => {
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendations(3);

  if (isLoading || error) {
    return null;
  }

  return (
    <VStack className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Recommendations')}
      />
      <ArticleList
        articles={articles}
        target="_blank"
      />
    </VStack>
  );
});
