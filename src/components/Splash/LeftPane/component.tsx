import React from 'react';
import styled, { keyframes } from 'styled-components';

import Name from './Name';

const fadeUpIn = keyframes`
  from {
    opacity: 0.1;
    transform: translateY(calc(var(--xs-space) * 0.5));
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  justify-self: center;

  animation: ${fadeUpIn} 1s;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    justify-self: end;
  }
`;

const JobTitle = styled.div`
  text-align: center;

  font-family: var(--handwriting-font-family);
  font-size: calc(var(--xl-font-size));

  color: var(--secondary-font-color);
  text-transform: lowercase;

  transition: var(--lg-transition);

  :hover {
    color: var(--primary-font-color);
  }
`;

export const LeftPane = () => (
  <Wrapper>
    <Name />
    <JobTitle>Web Developer</JobTitle>
  </Wrapper>
);

export default LeftPane;
