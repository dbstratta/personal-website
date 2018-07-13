import { injectGlobal } from 'styled-components';

/* tslint:disable-next-line:no-unused-expression */
injectGlobal`
  :root {
    --font-family: sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-family: var(--font-family);
  }

  body {
    margin: 0;
  }
`;
