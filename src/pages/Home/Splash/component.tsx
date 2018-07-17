import React from 'react';
import styled from 'styled-components';

import LeftPane from './LeftPane';
import RightPane from './RightPane';

const Grid = styled.section`
  display: grid;
  justify-content: center;
  align-content: center;

  justify-items: stretch;
  align-items: center;

  grid-template-columns: [grid-left] 1fr [grid-right];
  grid-template-rows: [grid-top] repeat(2, auto) [grid-bottom];

  column-gap: var(--xl-space);
  row-gap: var(--sm-space);

  min-height: calc(70vh - var(--nav-bar-height));

  margin: 0 auto var(--md-space);

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: [grid-left] 6fr 7fr [grid-right];
    grid-template-rows: [grid-top] 1fr [grid-bottom];

    padding-bottom: var(--xl-space);
  }
`;

export const Splash: React.SFC = () => (
  <Grid>
    <LeftPane />
    <RightPane />
  </Grid>
);

export default Splash;
