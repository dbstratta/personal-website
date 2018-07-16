import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: inherit;
  background-color: inherit;
  border: none;
`;

export const SourceCodeLink: React.SFC = () => (
  <StyledLink
    href="https://github.com/strattadb/portfolio"
    rel="noopener noreferrer"
    target="_blank"
  >
    Check the source code
  </StyledLink>
);

export default SourceCodeLink;
