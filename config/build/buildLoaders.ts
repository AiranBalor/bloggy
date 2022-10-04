import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // порядок лоадеров важен

  const cssLoader = buildCssLoader(isDev)

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
