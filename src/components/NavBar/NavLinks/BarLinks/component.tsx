import React from 'react';
import styled from 'styled-components';

import Link from '../../../Link';

const StyledUl = styled.ul`
  display: none;

  flex: 0 1 auto;

  padding: 0;
  margin: 0;

  list-style: none;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: initial;
  }
`;

const StyledLi = styled.li`
  display: inline;

  &:not(:last-child) {
    margin-right: var(--lg-space);
  }
`;

const StyledLink = styled(Link)`
  color: inherit;

  &:hover {
    text-shadow: none;
  }
`;

const BarLinks = () => (
  <StyledUl>
    <StyledLi>
      <StyledLink to="/about">About</StyledLink>
    </StyledLi>
    <StyledLi>
      <StyledLink to="/contact">Contact</StyledLink>
    </StyledLi>
  </StyledUl>
);

export default BarLinks;
