import React from 'react';
import styled from 'styled-components';

import OutboundLink from '../../../components/OutboundLink';
import PageHeading from '../../../components/PageHeading';

const loopGitHubLink = 'https://github.com/strattadb/loop';

export const AboutContent: React.SFC = () => (
  <section>
    <StyledPageHeading>About</StyledPageHeading>
    <ParagraphsWrapper>
      <StyledParagraph>
        Hi! I&apos;m Diego. I&apos;m a web developer, open source enthusiast and
        computer engineering student living in Montevideo, Uruguay.
      </StyledParagraph>
      <StyledParagraph>
        <strong>I love building things for the web!</strong> When I discovered
        web development back in 2016, it became my passion.
        <br />
        Since then, I&apos;ve developed many awesome projects, including my most
        ambitious so far,{' '}
        <OutboundLink
          to={loopGitHubLink}
          target="_blank"
          rel="noopener noreferrer"
          eventLabel="Loop GitHub page"
        >
          Loop, a modern team communication app
        </OutboundLink>
        .
      </StyledParagraph>
      <StyledParagraph>
        I firmly believe in building strong teams as a way to deliver great and
        successful products.
      </StyledParagraph>
      <StyledParagraph>
        When I&apos;m not developing things, I&apos;m probably riding my
        bicycle, binge-watching something on Netflix or practicing my dancing
        skills!
      </StyledParagraph>
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

export default AboutContent;
