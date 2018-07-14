import React from 'react';
import styled from 'styled-components';

import Social from './Social';

const Wrapper = styled.div`
  justify-self: center;
  align-self: start;

  width: 100%;
  margin-top: var(--lg-space);

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    justify-self: start;
    align-self: center;

    width: 60%;
    margin-top: 0;
  }
`;

const About = styled.div`
  color: var(--secondary-font-color);
  font-size: var(--lg-font-size);

  margin-bottom: var(--lg-space);
`;

export const RightPane = () => (
  <Wrapper>
    <About>Hi! I'm a web developer from Montevideo, Uruguay.</About>
    <Social />
  </Wrapper>
);

export default RightPane;
