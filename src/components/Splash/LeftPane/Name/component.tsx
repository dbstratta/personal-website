import React from 'react';
import styled from 'styled-components';

import ColorHueIncrementator from '../../../ColorHueIncrementator';

export type NameProps = {
  colorHue: number;
};

const Wrapper = styled.div.attrs({
  style: (props: any) => ({
    color: `hsla(${props.colorHue}, 100%, 50%, 1)`,
  }),
})`
  font-family: var(--display-font-family);
  font-size: var(--xxl-font-size);

  margin-bottom: var(--xs-space);

  transition: var(--md-transition);

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    font-size: calc(var(--xxl-font-size) * 1.4);
  }
` as any;

const FirstName = () => <div>Diego</div>;
const LastName = () => <div>Stratta</div>;

const FullName = () => (
  <>
    <FirstName />
    <LastName />
  </>
);

export const Name = ({ colorHue }: NameProps) => (
  <Wrapper colorHue={colorHue}>
    <FullName />
  </Wrapper>
);

const NameWithProps = () => (
  <ColorHueIncrementator
    render={({ colorHue }) => <Name colorHue={colorHue} />}
  />
);

export default NameWithProps;