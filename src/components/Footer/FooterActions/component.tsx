import React from 'react';
import styled from 'styled-components';

import Share from './Share';
import SourceCodeLink from './SourceCodeLink';

const Wrapper = styled.div`
  margin: 0 auto var(--xs-space);

  > *:not(:last-child) {
    margin-right: var(--md-space);
  }
`;

export const FooterActions: React.SFC = () => (
  <Wrapper>
    <Share />
    <SourceCodeLink />
  </Wrapper>
);

export default FooterActions;
