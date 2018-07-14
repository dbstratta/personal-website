import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  color: var(--tertiary-font-color);

  font-family: var(--serif-font-family);
`;

const currentYear = new Date().getFullYear();

export const Footer = () => (
  <StyledFooter>Copyright © {currentYear} Diego Stratta</StyledFooter>
);

export default Footer;
