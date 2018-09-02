import React from 'react';
import styled from 'styled-components';

import Separator from '../../../../components/Separator';
import ShortAbout from './ShortAbout';
import Social from './Social';

export const RightPane: React.SFC = () => (
  <Wrapper>
    <ShortAbout />
    <SeparatorAndSocialWrapper>
      <Separator />
      <StyledSocial />
    </SeparatorAndSocialWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  justify-self: center;
  align-self: start;

  width: 100%;
  margin-top: var(--md-space);

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    justify-self: start;
    align-self: center;

    width: 70%;
    margin-top: 0;
  }
`;

const SeparatorAndSocialWrapper = styled.div`
  max-width: 44rem;
  margin: auto;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0;
  }
`;

const StyledSocial = styled(Social)`
  margin-top: var(--md-space);
  text-align: center;
`;

export default RightPane;
