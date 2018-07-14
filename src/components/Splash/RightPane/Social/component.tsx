import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { OutboundLink } from 'react-ga';
import styled from 'styled-components';

const Wrapper = styled.div``;

export type SocialLinkProps = {
  icon: any;
  to: string;
  className?: string;
  title?: string;
};

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: var(--primary-font-color);
  transition: 0.3s;

  :hover {
    color: var(--secondary-font-color);
  }
`;

const SocialLink = (props: SocialLinkProps) => (
  <OutboundLink
    eventLabel=""
    to={props.to}
    className={props.className}
    title={props.title}
  >
    <StyledFontAwesomeIcon icon={props.icon} size="3x" />
  </OutboundLink>
);

const StyledSocialLink = styled(SocialLink)`
  &:not(:first-child) {
    margin-left: var(--lg-space);
  }
`;

const GitHubLink = () => (
  <StyledSocialLink
    icon={faGithub}
    to="https://github.com/strattadb"
    title="GitHub"
  />
);

const LinkedInLink = () => (
  <StyledSocialLink
    icon={faLinkedin}
    to="https://www.linkedin.com/in/diegostratta/"
    title="LinkedIn"
  />
);

export const Social = () => (
  <Wrapper>
    <GitHubLink />
    <LinkedInLink />
  </Wrapper>
);

export default Social;
