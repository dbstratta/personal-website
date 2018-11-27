import React from 'react';
import styled from 'styled-components';

import ColorIncrement from '../../../../../components/ColorIncrement';

const StyledColorIncrement = styled(ColorIncrement)`
  font-family: var(--display-font-family);
  font-size: var(--xxl-font-size);

  margin-bottom: var(--xs-space);

  transition: var(--md-transition);

  @media (min-width: ${(props: any) => props.theme.breakpoints.lg}) {
    font-size: calc(var(--xxl-font-size) * 1.4);
  }
`;

export const Name: React.SFC = () => (
  <StyledColorIncrement delay={1500}>
    <div>Diego</div>
    <div>Stratta</div>
  </StyledColorIncrement>
);

export default Name;
