import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationSchema';
// здесь показан способ группировки редюсеров, относящихся к одной странице/фиче/виджету и т.д.
// Решение не идеальное, по хорошему выносить каждый из перечисленных ниже редюсеров в отдельную фичу
export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema
  recommendations: ArticleDetailsRecommendationsSchema
}
