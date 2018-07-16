import React from 'react';
import styled from 'styled-components';

import SectionHeading from '../../../components/SectionHeading';

const StyledSection = styled.section`
  margin: var(--xl-space) auto;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 70%;
  }
`;

export const Contact = () => (
  <StyledSection id="contact">
    <SectionHeading>Contact</SectionHeading>
  </StyledSection>
);

export default Contact;
