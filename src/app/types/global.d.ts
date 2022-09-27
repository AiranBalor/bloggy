// TS по умолчанию не знает типов модулей css, поэтому необходимо создавать данный файл и объявлять тип css, используемый на проекте.
declare module '*.scss' {
  interface IClassNames {
      [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
