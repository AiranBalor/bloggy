import webpack from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

// данная конфигурация вебпака нужна для настройки работы storybook,
// который по умолчанию не умеет работать с css модулями и т.д.
export default ({ config }: {config: webpack.Configuration}) => {
  // здесь опишем только, где находится проект
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  // теперь поместим в конфиг путь до проекта и расширения файлом, которые следует обрабатывать
  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('ts', 'tsx');

  config.module!.rules! = config!.module!.rules!.map((rule: any) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module!.rules!.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module?.rules?.push(buildCssLoader(true));

  return config;
};
