import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    // Данный плагин генерирует html приложения.
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    // Данный плагин создает css файлы отдельно от JS при сборке
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    // плагин для использования глобальных переменных в проекте. См. конфигурацию i18n
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev),
    }),
    new ReactRefreshWebpackPlugin(),
  ];
}
