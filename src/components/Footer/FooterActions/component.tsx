import React from 'react';
import styled from 'styled-components';

import Share from './Share';
import SourceCodeLink from './SourceCodeLink';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  margin: 0 auto var(--xxs-space);
`;

const ActionWrapper = styled.div`
  flex: 1 1 100%;

  margin: 0 auto var(--xs-space);
`;

export const FooterActions: React.SFC = () => (
  <Wrapper>
    <ActionWrapper>
      <Share />
    </ActionWrapper>
    <ActionWrapper>
      <SourceCodeLink />
    </ActionWrapper>
  </Wrapper>
);

export default FooterActions;
