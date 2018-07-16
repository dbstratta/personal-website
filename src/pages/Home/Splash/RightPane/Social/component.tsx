import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { OutboundLink } from 'react-ga';
import styled from 'styled-components';

const Wrapper = 'div';

export type SocialProps = Readonly<{
  className?: string;
}>;

export type SocialLinkProps = Readonly<{
  icon: any;
  to: string;
  className?: string;
  title?: string;
  eventLabel: string;
}>;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: var(--secondary-font-color);
  transition: var(--lg-transition);

  :hover {
    color: var(--primary-font-color);
  }
`;

const SocialLink: React.SFC<SocialLinkProps> = ({
  to,
  title,
  className,
  eventLabel,
  icon,
}) => (
  <OutboundLink
    to={to}
    eventLabel={eventLabel}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    className={className}
  >
    <StyledFontAwesomeIcon icon={icon} size="2x" />
  </OutboundLink>
);

const StyledSocialLink = styled(SocialLink)`
  &:not(:first-child) {
    margin-left: calc(var(--lg-space) * 1.3);
  }
`;

const GitHubLink: React.SFC = () => (
  <StyledSocialLink
    icon={faGithub}
    to="https://github.com/strattadb"
    eventLabel="GitHub profile"
    title="GitHub"
  />
);

const LinkedInLink: React.SFC = () => (
  <StyledSocialLink
    icon={faLinkedin}
    to="https://www.linkedin.com/in/diegostratta/"
    eventLabel="LinkedIn profile"
    title="LinkedIn"
  />
);

const EmailLink: React.SFC = () => (
  <StyledSocialLink
    icon={faEnvelope}
    to="mailto:strattadb@gmail.com"
    eventLabel="Mailto"
    title="Email"
  />
);

export const Social: React.SFC<SocialProps> = ({ className }) => (
  <Wrapper className={className}>
    <GitHubLink />
    <LinkedInLink />
    <EmailLink />
  </Wrapper>
);

export default Social;
