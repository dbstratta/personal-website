import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import OutboundLink from '../../OutboundLink';

export const SocialLinks: React.SFC = () => (
  <Wrapper>
    <StyledOutboundLink
      to="https://github.com/strattadb"
      eventLabel="GitHub profile"
      title="GitHub"
    >
      <StyledFontAwesomeIcon icon={faGithub} />
    </StyledOutboundLink>
    <StyledOutboundLink
      to="https://www.linkedin.com/in/diegostratta/"
      eventLabel="LinkedIn profile"
      title="LinkedIn"
    >
      <StyledFontAwesomeIcon icon={faLinkedin} />
    </StyledOutboundLink>
    <StyledOutboundLink
      to="mailto:strattadb@gmail.com"
      eventLabel="Email"
      title="Email"
    >
      <StyledFontAwesomeIcon icon={faEnvelope} />
    </StyledOutboundLink>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-bottom: var(--xs-space);
`;

const StyledOutboundLink = styled(OutboundLink)`
  color: inherit;

  &:not(:last-child) {
    margin-right: var(--sm-space);
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)``;

export default SocialLinks;
