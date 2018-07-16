import React from 'react';
import styled from 'styled-components';

import SectionHeading from '../../../components/SectionHeading';

const StyledSection = styled.section`
  width: var(--main-content-width);
  margin: var(--xl-space) auto;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: calc(var(--main-content-width) * 0.7);
  }
`;

export const About: React.SFC = () => (
  <StyledSection id="about">
    <SectionHeading>About</SectionHeading>
  </StyledSection>
);

export default About;
