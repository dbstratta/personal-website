import React from 'react';
import styled from 'styled-components';

import Copyright from './Copyright';
import FooterActions from './FooterActions';

const Wrapper = styled.footer`
  text-align: center;
  color: var(--tertiary-font-color);

  font-family: var(--serif-font-family);

  flex: 0 0 auto;

  width: var(--main-content-width);
  margin: var(--xl-space) auto var(--sm-space);
`;

export const Footer = () => (
  <Wrapper>
    <FooterActions />
    <Copyright />
  </Wrapper>
);

export default Footer;
