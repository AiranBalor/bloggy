import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

// 1. Создаем инстанс для RTK query. Endpoints описаны в фичах или компонентах, и инжектятся
// асинхронно в стейт
export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(
    {
      baseUrl: __API__,
      prepareHeaders: (headers) => {
        const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
        if (token) {
          headers.set('Authorization', token);
        }
        return headers;
      },
    },
  ),
  endpoints: (builder) => ({
  }),
});
