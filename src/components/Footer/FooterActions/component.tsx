import React from 'react';
import styled from 'styled-components';

import Share from './Share';
import SourceCodeLink from './SourceCodeLink';

const Wrapper = styled.div`
  --children-display: block;

  margin: 0 auto var(--xs-space);

  > *:not(:last-child) {
    margin: 0 auto var(--xs-space);
  }

  > * {
    display: var(--children-display);
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    --children-display: inline;

    > *:not(:last-child) {
      margin: 0 var(--md-space) 0 0;
    }
  }
`;

export const FooterActions: React.SFC = () => (
  <Wrapper>
    <Share />
    <SourceCodeLink />
  </Wrapper>
);

export default FooterActions;
