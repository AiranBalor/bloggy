import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
  baseURL: __API__,
});

// при первичном открытии сайта на хостинге падает проблема с профилем
// после авторизации в локальном хранилище пустая строка вместо переменной
// добавил перехватчик, чтобы при любом запросе с заголовками эта переменная
// принудительно еще раз вытаскивалась из хранилища.
$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
  }
  return config;
});
