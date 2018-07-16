import React from 'react';
import { OutboundLink } from 'react-ga';
import styled from 'styled-components';

import { footerLinkStyle } from '../FooterLink';

const StyledLink = styled(OutboundLink)`
  ${footerLinkStyle};
`;

export const SourceCodeLink: React.SFC = () => (
  <StyledLink
    to="https://github.com/strattadb/portfolio"
    eventLabel="Website Source Code (GitHub)"
    rel="noopener noreferrer"
    target="_blank"
  >
    Check the source code
  </StyledLink>
);

export default SourceCodeLink;
