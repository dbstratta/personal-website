import React from 'react';
import styled from 'styled-components';

import Mailto from '../../../components/Mailto';
import PageHeading from '../../../components/PageHeading';

export const ContactContent: React.SFC = () => (
  <section>
    <StyledPageHeading>Contact</StyledPageHeading>
    <ParagraphsWrapper>
      <StyledParagraph>I'd love to hear from you!</StyledParagraph>
      <StyledParagraph>
        From "hi!" to job opportunities, everything is welcome!
        <br />
        I'll try to get back to you as soon as I can.
      </StyledParagraph>
      <StyledEmailParagraph>
        <Mailto email="strattadb@gmail.com">strattadb@gmail.com</Mailto>
      </StyledEmailParagraph>
    </ParagraphsWrapper>
  </section>
);

const StyledPageHeading = styled(PageHeading)`
  animation: var(--fade-up-in-keyframe) 1s;
`;

const ParagraphsWrapper = styled.div`
  width: 100%;
  max-width: 50rem;

  font-size: var(--lg-font-size);

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 60%;
  }
`;

const StyledParagraph = styled.p``;

const StyledEmailParagraph = styled.p`
  font-size: 1.1em;
`;

export default ContactContent;
