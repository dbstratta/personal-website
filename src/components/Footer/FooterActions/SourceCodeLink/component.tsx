import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { OutboundLink } from 'react-ga';
import styled from 'styled-components';

import { footerLinkStyle } from '../FooterLink';

const StyledLink = styled(OutboundLink)`
  ${footerLinkStyle};
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: var(--xs-space);
  color: var(--quaternary-font-color);
`;

export const SourceCodeLink: React.SFC = () => (
  <StyledLink
    to="https://github.com/strattadb/portfolio"
    eventLabel="Website source code (GitHub)"
    rel="noopener noreferrer"
    target="_blank"
  >
    <StyledFontAwesomeIcon icon={faCode} size="sm" />
    See the source code
  </StyledLink>
);

export default SourceCodeLink;
