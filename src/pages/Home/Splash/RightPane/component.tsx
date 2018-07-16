import React from 'react';
import styled from 'styled-components';

import Separator from '../../../../components/Separator';
import ShortAbout from './ShortAbout';
import Social from './Social';

const Wrapper = styled.div`
  justify-self: center;
  align-self: start;

  width: 100%;
  margin-top: var(--lg-space);

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    justify-self: start;
    align-self: center;

    width: 70%;
    margin-top: 0;
  }
`;

const StyledSocial = styled(Social)`
  margin-top: var(--md-space);
  text-align: center;
`;

export const RightPane: React.SFC = () => (
  <Wrapper>
    <ShortAbout />
    <Separator />
    <StyledSocial />
  </Wrapper>
);

export default RightPane;
