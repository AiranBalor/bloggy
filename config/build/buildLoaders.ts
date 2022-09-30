import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // порядок лоадеров важен

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Подключаем лоадер плагина вместо style.loader
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            /// .module./gm - через Regexp тоже вариант
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  // если поставить бабель лоадер после тайпскриптового, он начнет обрабатывать файлы tsx и ts повторно, что приведет к ошибке. В дальнейшем,
  // ts-loader вырежем

  const babelLoader = {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ['i18next-extract', {
            outputPath: 'babelTranslations/{{locale}}/{{ns}}.json',
            locales: ['en', 'ru'],
            keyAsDefaultValue: true,
          }],
        ],
      },
    },
  };

  return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader];
}
