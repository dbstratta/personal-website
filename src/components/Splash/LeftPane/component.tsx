import React from 'react';
import styled from 'styled-components';

import Name from './Name';

const Wrapper = styled.div`
  justify-self: center;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    justify-self: end;
  }
`;

const JobTitle = styled.div`
  text-align: center;

  font-size: calc(var(--lg-font-size) * 1.2);

  color: var(--secondary-font-color);
  text-transform: lowercase;
`;

export const LeftPane = () => (
  <Wrapper>
    <Name />
    <JobTitle>Web Developer</JobTitle>
  </Wrapper>
);

export default LeftPane;
