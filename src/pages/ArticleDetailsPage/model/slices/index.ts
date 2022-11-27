import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsRecommendationReducer } from './articleDetailsPageRecommendationSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsRecommendationReducer,
});
