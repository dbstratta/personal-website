import React from 'react';
import styled from 'styled-components';

import LeftPane from './LeftPane';
import RightPane from './RightPane';

const Grid = styled.section`
  display: grid;
  justify-content: center;

  justify-items: stretch;
  align-items: center;
  align-content: center;

  grid-template-columns: [grid-left] 1fr [grid-right];
  grid-template-rows: [grid-top] repeat(2, auto) [grid-bottom];

  column-gap: var(--xl-space);
  row-gap: var(--sm-space);

  width: var(--main-content-width);
  min-height: 70vh;

  margin: 0 auto var(--xl-space);

  flex: 1 0 auto;
  align-self: flex-start;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: [grid-left] 6fr 7fr [grid-right];
    grid-template-rows: [grid-top] 1fr [grid-bottom];

    padding-bottom: var(--xl-space);
    min-height: 90vh;
  }
`;

export const Splash = () => (
  <Grid>
    <LeftPane />
    <RightPane />
  </Grid>
);

export default Splash;
