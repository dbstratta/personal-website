import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Link from '../Link';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';

const StyledNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;

  justify-content: flex-end;
  align-items: center;

  flex-shrink: 0;
  height: var(--nav-bar-height);

  font-size: var(--lg-font-size);

  margin: var(--xs-space) auto var(--xs-space);
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

export type NavBarProps = Readonly<{}>;

export type NavBarState = Readonly<{
  menuOpen: boolean;
}>;

export class NavBar extends PureComponent<NavBarProps, NavBarState> {
  public state: NavBarState = { menuOpen: false };

  private readonly handleMenuClick = (): void => this.toggleMenu();

  private readonly toggleMenu = (): void =>
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));

  public render() {
    return (
      <>
        <StyledNav>
          <LogoWrapper>
            <Logo to="/">Diego Stratta</Logo>
          </LogoWrapper>
          <NavLinks onMenuClick={this.handleMenuClick} />
        </StyledNav>
        <NavMenu open={this.state.menuOpen} />
      </>
    );
  }
}

export default NavBar;
