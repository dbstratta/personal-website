import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { OutboundLink } from 'react-ga';
import styled from 'styled-components';

const Wrapper = styled.div``;

export type SocialProps = {
  className?: string;
};

export type SocialLinkProps = {
  icon: any;
  to: string;
  className?: string;
  title?: string;
};

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: var(--secondary-font-color);
  transition: var(--lg-transition);

  :hover {
    color: var(--primary-font-color);
  }
`;

const SocialLink = (props: SocialLinkProps) => (
  <OutboundLink
    target="_blank"
    eventLabel=""
    to={props.to}
    className={props.className}
    title={props.title}
  >
    <StyledFontAwesomeIcon icon={props.icon} size="2x" />
  </OutboundLink>
);

const StyledSocialLink = styled(SocialLink)`
  &:not(:first-child) {
    margin-left: calc(var(--lg-space) * 1.3);
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

const EmailLink = () => (
  <StyledSocialLink
    icon={faEnvelope}
    to="mailto:strattadb@gmail.com"
    title="Email"
  />
);

export const Social = ({ className }: SocialProps) => (
  <Wrapper className={className}>
    <GitHubLink />
    <LinkedInLink />
    <EmailLink />
  </Wrapper>
);

export default Social;
