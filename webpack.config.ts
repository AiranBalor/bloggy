import webpack from 'webpack';
import path from 'path';
import { BuildPaths, BuildEvn } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

// для использования переменных окружения поместим создаваемую конфигурацию в функцию, которая переменные окружения принимает как параметр
export default (env: BuildEvn) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;
  const analyze = env.analyze || 0;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    analyze,
  });

  return config;
};
