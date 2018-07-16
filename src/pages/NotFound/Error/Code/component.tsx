import React from 'react';
import styled from 'styled-components';

import ColorIncrement from '../../../../components/ColorIncrement';

export type CodeProps = {
  readonly code: number;
};

const StyledColorIncrement = styled(ColorIncrement)`
  font-size: calc(var(--xxl-font-size) * 1.5);

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    font-size: calc(var(--xxl-font-size) * 2.5);
  }
`;

export const Code = ({ code }: CodeProps) => (
  <StyledColorIncrement>{code}</StyledColorIncrement>
);

export default Code;
