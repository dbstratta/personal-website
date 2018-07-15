import React from 'react';
import styled from 'styled-components';

export type CodeProps = {
  code: number;
  colorHue: number;
};

const Wrapper = styled.div.attrs({
  style: (props: any) => ({
    color: `hsla(${props.colorHue}, 100%, 50%, 1)`,
  }),
})`
  font-size: calc(var(--xxl-font-size) * 1.5);

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    font-size: calc(var(--xxl-font-size) * 2.5);
  }
` as any;

export const Code = ({ code, colorHue }: CodeProps) => (
  <Wrapper colorHue={colorHue}>{code}</Wrapper>
);

export default Code;
