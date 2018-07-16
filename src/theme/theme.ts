import {
  breakpoints,
  Breakpoints,
  breakpointsWithoutUnit,
  BreakpointsWithoutUnit,
} from './breakpoints';
import { colors, Colors } from './colors';

export type Theme = {
  breakpoints: Breakpoints;
  breakpointsWithoutUnit: BreakpointsWithoutUnit;
  colors: Colors;
};

const theme: Theme = {
  breakpoints,
  breakpointsWithoutUnit,
  colors,
};

export default theme;
