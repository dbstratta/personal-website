declare module '*.svg' {
  import * as React from 'react';

  const value: string;

  const ReactComponent: React.StatelessComponent<
    React.SVGAttributes<SVGElement>
  >;

  export default value;
  export { ReactComponent };
}
