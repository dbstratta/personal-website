import React from 'react';
import styled, { keyframes } from 'styled-components';

import Link from '../../Link';
import Separator from '../../Separator';

export type NavMenuProps = {
  open: boolean;
};

const FadeDownInKeyframe = keyframes`
  from {
    opacity: 0.1;
    transform: translateY(calc(var(--xs-space) * -0.5));
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MenuUl = styled.ul`
  width: var(--main-content-width);

  margin: 0 auto var(--sm-space);
  padding: 0;

  list-style: none;

  font-size: var(--lg-font-size);
  text-align: center;

  animation: ${FadeDownInKeyframe} 0.5s;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

const MenuLi = styled.li`
  display: block;
  margin-bottom: var(--xs-space);

  &:not(:first-child) {
    margin-top: var(--xs-space);
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const NavMenu: React.SFC<NavMenuProps> = ({ open }) => {
  if (!open) {
    return null;
  }

  return (
    <MenuUl>
      <MenuLi>
        <StyledLink to="/">Home</StyledLink>
      </MenuLi>
      <Separator />
      <MenuLi>
        <StyledLink to="/about">About</StyledLink>
      </MenuLi>
      <Separator />
      <MenuLi>
        <StyledLink to="/contact">Contact</StyledLink>
      </MenuLi>
      <Separator />
    </MenuUl>
  );
};

export default NavMenu;
