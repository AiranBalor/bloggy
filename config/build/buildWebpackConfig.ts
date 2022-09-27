import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    // mode это режим, бывает разработки или продакшена. в продакшене сборка (бандл) более минимизированная
    mode,
    entry: paths.entry,
    // loaders. Порядок лоадеров важен!
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    // здесь настраивается конечный результат сборки. имя файла мы можем подставлять динамически, по умолчанию main. contenthash необходим для того, чтобы пользователь всегда
    // получал актуальный файл сборки, а не из хеша браузера.
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    // плагины для работы webpack.
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
