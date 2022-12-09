import { rtkApi } from 'shared/api/rtkApi';

// 4. используем rtk Query для получения рекомендаций
const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

// название для хука возьмем поприятней
export const useArticleRecommendations = recommendationsApi.useGetArticleRecommendationsQuery;
