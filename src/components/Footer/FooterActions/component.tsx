import React from 'react';
import styled, { css } from 'styled-components';

import InstallAppButton from './InstallAppButton';
import ShareButton from './ShareButton';
import SourceCodeLink from './SourceCodeLink';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  margin: 0 auto var(--xxs-space);
`;

const footerActionStyles = css`
  flex: 1 1 100%;

  margin: 0 auto var(--xs-space);
`;

const StyledShareButton = styled(ShareButton)`
  ${footerActionStyles};
`;

const StyledInstallAppButton = styled(InstallAppButton)`
  ${footerActionStyles};
`;

const StyledSourceCodeLink = styled(SourceCodeLink)`
  ${footerActionStyles};
`;

export const FooterActions: React.SFC = () => (
  <Wrapper>
    <StyledShareButton />
    <StyledInstallAppButton />
    <StyledSourceCodeLink />
  </Wrapper>
);

export default FooterActions;
