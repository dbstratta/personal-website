import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { sendAnalyticsEvent } from '../../analytics';
import Link from '../Link';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';

const StyledNav = styled.nav`
  flex-shrink: 0;

  width: var(--main-content-width);
  max-width: var(--main-content-max-width);
  margin: auto;
`;

const BarWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;

  justify-content: flex-end;
  align-items: center;

  font-size: var(--lg-font-size);

  height: var(--nav-bar-height);
  margin: var(--xs-space) auto var(--xs-space);

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

  private readonly handleMenuPointerDown = (): void => {
    this.toggleMenu();

    sendAnalyticsEvent({
      category: 'Button',
      action: 'Click',
      label: 'Navigation bar menu',
    });
  };

  private readonly toggleMenu = (): void =>
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));

  public render() {
    return (
      <StyledNav>
        <BarWrapper>
          <LogoWrapper>
            <Logo to="/">Diego Stratta</Logo>
          </LogoWrapper>
          <NavLinks onMenuPointerDown={this.handleMenuPointerDown} />
        </BarWrapper>
        <NavMenu open={this.state.menuOpen} />
      </StyledNav>
    );
  }
}

export default NavBar;
