import React from 'react';
import styled from 'styled-components';

import Code from './Code';
import LinkToHomepage from './LinkToHomepage';

export type ErrorProps = Readonly<{
  code: number;
  message: string;
}>;

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

  margin-bottom: var(--xl-space);
`;

const Wrapper = styled.div`
  margin-bottom: calc(var(--xl-space) * 1.5);
  animation: var(--fade-up-in-keyframe) 1s;
`;

export const Error: React.SFC<ErrorProps> = ({ code, message }) => (
  <Grid>
    <Wrapper>
      <Code code={code} />
      <Message>{message}</Message>
      <LinkToHomepage />
    </Wrapper>
  </Grid>
);

export default Error;
