import React from 'react';
import styled from 'styled-components';

import Copyright from './Copyright';
import FooterActions from './FooterActions';
import SocialLinks from './SocialLinks';

const Wrapper = styled.footer`
  text-align: center;
  color: var(--tertiary-font-color);

  font-family: var(--serif-font-family);

  flex: 0 0 auto;

  width: var(--main-content-width);
  margin: var(--md-space) auto var(--sm-space);

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-top: var(--xl-space);
  }
`;

export const Footer = () => (
  <Wrapper>
    <SocialLinks />
    <FooterActions />
    <Copyright />
  </Wrapper>
);

export default Footer;
