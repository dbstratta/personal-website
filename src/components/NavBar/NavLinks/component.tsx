// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

export type NavLinksProps = Readonly<{}>;

export type NavLinksState = Readonly<{
  menuOpen: boolean;
}>;

export class NavLinks extends PureComponent<NavLinksProps, NavLinksState> {
  public state: NavLinksState = { menuOpen: false };

  // private readonly handleMenuClick = (): void => this.toggleMenu();

  // private readonly toggleMenu = (): void =>
  //   this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));

  public render() {
    return <Wrapper>link</Wrapper>;
  }
}

const Wrapper = styled.div``;

export default NavLinks;
