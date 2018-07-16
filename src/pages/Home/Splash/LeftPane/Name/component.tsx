import React from 'react';
import styled from 'styled-components';

import ColorIncrement from '../../../../../components/ColorIncrement';

const StyledColorIncrement = styled(ColorIncrement)`
  font-family: var(--display-font-family);
  font-size: var(--xxl-font-size);

  margin-bottom: var(--xs-space);

  transition: var(--md-transition);

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    font-size: calc(var(--xxl-font-size) * 1.4);
  }
`;

const FirstName = () => <div>Diego</div>;
const LastName = () => <div>Stratta</div>;

const FullName = () => (
  <>
    <FirstName />
    <LastName />
  </>
);

export const Name: React.SFC = () => (
  <StyledColorIncrement>
    <FullName />
  </StyledColorIncrement>
);

export default Name;
