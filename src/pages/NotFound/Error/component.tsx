import React from 'react';
import styled from 'styled-components';

import ColorHueIncrementator from '../../../components/ColorHueIncrementator';
import Code from './Code';

export type ErrorProps = {
  readonly code: number;
  readonly message: string;
};

const Grid = styled.div`
  text-align: center;
  display: grid;
  justify-content: center;

  justify-items: stretch;
  align-items: center;
  align-content: center;

  grid-template-columns: [grid-left] 1fr [grid-right];
  grid-template-rows: [grid-top] auto [grid-bottom];

  width: var(--main-content-width);
  min-height: 70vh;

  margin: auto;

  flex: 1 0 auto;
  align-self: flex-start;
`;

const Message = styled.div`
  font-size: var(--xl-font-size);
  color: var(--secondary-font-color);
`;

const Wrapper = styled.div`
  margin-bottom: calc(var(--xl-space) * 1.5);
  animation: var(--fade-up-in-keyframe) 1s;
`;

export const Error = ({ code, message }: ErrorProps) => (
  <Grid>
    <Wrapper>
      <ColorHueIncrementator
        render={({ colorHue }) => <Code code={code} colorHue={colorHue} />}
      />
      <Message>{message}</Message>
    </Wrapper>
  </Grid>
);

export default Error;
