import React from 'react';
import styled from 'styled-components';

import Link from '../../../../components/Link';

const StyledLink = styled(Link)`
  font-size: var(--xl-font-size);
  animation: var(--wait-and-fade-in-keyframe) 1s;
`;

export const LinkToHomepage: React.SFC = () => (
  <StyledLink to="/">Go to homepage</StyledLink>
);

export default LinkToHomepage;
