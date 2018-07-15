import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  color: var(--tertiary-font-color);

  font-family: var(--serif-font-family);

  flex: 0 0 auto;

  margin: var(--xl-space) auto var(--sm-space);
`;

const currentYear = new Date().getFullYear();

export const Footer = () => (
  <StyledFooter>Copyright © {currentYear} Diego Stratta</StyledFooter>
);

export default Footer;
