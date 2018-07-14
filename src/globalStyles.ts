import { injectGlobal } from 'styled-components';

/* tslint:disable-next-line:no-unused-expression */
injectGlobal`
  :root {
    --sans-serif-font-family: 'Open Sansa', sans-serif;
    --serif-font-family: 'EB Garamanond', serif;
    --display-font-family: var(--serif-font-family);
    --handwriting-font-family: 'La Belle Aurore', sans-serif;

    --primary-color-hue: 200;
    --primary-color: hsla(var(--primary-color-hue), 100%, 50%, 1);

    --primary-font-color: hsla(0, 0%, 10%, 1);
    --secondary-font-color: hsla(0, 0%, 30%, 1);
    --tertiary-font-color: hsla(0, 0%, 40%, 1);

    --background-color: hsla(43, 100%, 99%, 1);

    --xs-font-size: 0.8rem;
    --sm-font-size: 0.82rem;
    --md-font-size: 1rem;
    --lg-font-size: 1.4rem;
    --xl-font-size: 2.5rem;
    --xxl-font-size: 5rem;

    --base-space: 0.2rem;
    --xs-space: calc(var(--base-space) * 3);
    --sm-space: calc(var(--base-space) * 5);
    --md-space: calc(var(--base-space) * 8);
    --lg-space: calc(var(--base-space) * 13);
    --xl-space: calc(var(--base-space) * 21);
  }

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html {
    background-color: var(--background-color);
  }

  body {
    margin: 0;

    font-family: var(--sans-serif-font-family);
    font-size: var(--md-font-size);
    color: var(--primary-font-color);
  }

  #root {
    display: flex;
    flex-flow: column nowrap;
  }

  ::selection {
    background-color: hsla(var(--primary-color-hue), 100%, 80%, 1);
  }
`;
