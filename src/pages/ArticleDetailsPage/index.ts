export {
  ArticleDetailsPageAsync as ArticleDetailsPage,
} from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
export type { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationSchema';
export type { ArticleDetailsPageSchema } from './model/types/index';
export { articleDetailsPageReducer } from './model/slices/index';
