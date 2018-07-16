import React from 'react';
import styled from 'styled-components';

import JobTitle from './JobTitle';
import Name from './Name';

const Wrapper = styled.div`
  justify-self: center;

  animation: var(--fade-up-in-keyframe) 1s;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    justify-self: end;
  }
`;

export const LeftPane: React.SFC = () => (
  <Wrapper>
    <Name />
    <JobTitle />
  </Wrapper>
);

export default LeftPane;
