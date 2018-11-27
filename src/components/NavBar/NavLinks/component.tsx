import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { keyframes } from 'styled-components';

import BarLinks from './BarLinks';

const Wrapper = styled.div`
  flex: 0 1 auto;
`;

export type NavLinksProps = {
  onMenuPointerDown: React.PointerEventHandler;
};

const fadeLeftInKeyframe = keyframes`
  from {
    opacity: 0.1;
    transform: translateX(calc(var(--xs-space) * 0.5));
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;

  color: var(--secondary-font-color);
  animation: ${fadeLeftInKeyframe} 1s;

  cursor: pointer;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

export const NavLinks: React.SFC<NavLinksProps> = ({ onMenuPointerDown }) => (
  <Wrapper>
    <BarLinks />
    <StyledButton
      onPointerDown={onMenuPointerDown}
      aria-label="Toggle navigation menu"
    >
      <FontAwesomeIcon icon={faBars} />
    </StyledButton>
  </Wrapper>
);

export default NavLinks;
