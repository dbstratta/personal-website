import React from 'react';
import styled from 'styled-components';

import Link from '../Link';

export const NavBar: React.SFC = () => (
  <StyledNav>
    <LogoWrapper>
      <Logo to="/">Diego Stratta</Logo>
    </LogoWrapper>
  </StyledNav>
);

const StyledNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;

  justify-content: flex-end;
  align-items: center;

  flex-shrink: 0;
  height: var(--nav-bar-height);

  font-size: var(--lg-font-size);

  margin: 0 auto var(--xs-space);
  width: var(--main-content-width);

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-bottom: var(--md-space);
  }
`;

const LogoWrapper = styled.span`
  display: none;
  flex: 1 0 auto;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: initial;
  }
`;

const Logo = styled(Link)`
  color: var(--secondary-text-color);

  &:hover {
    color: var(--primary-text-color);
    text-shadow: none;
  }
`;

export default NavBar;
