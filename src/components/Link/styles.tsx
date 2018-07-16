import { css } from 'styled-components';

export const linkStyle = css`
  text-decoration: none;
  color: var(--primary-color);

  text-shadow: none;
  transition: var(--sm-transition);

  &:hover {
    text-shadow: 0 0 0.5rem hsla(var(--primary-color-hue), 100%, 85%, 0.5);
  }
`;
