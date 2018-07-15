import React, { PureComponent } from 'react';

import { getPrimaryColorHue } from '../../helpers';
import Interval from '../Interval';

export type ColorHueIncrementatorProps = {
  readonly delay?: number;
  readonly initialColorHue?: number;
  readonly render: (state: ColorHueIncrementatorState) => React.ReactNode;
};

export type ColorHueIncrementatorState = {
  readonly colorHue: number;
};

export class ColorHueIncrementator extends PureComponent<
  ColorHueIncrementatorProps,
  ColorHueIncrementatorState
> {
  private static readonly defaultDelay = 2000;

  public readonly state: ColorHueIncrementatorState = {
    colorHue: this.getInitialColorHue(),
  };

  private getInitialColorHue() {
    return this.props.initialColorHue || getPrimaryColorHue();
  }

  private changeColorHue = (): void => {
    this.setState(({ colorHue: prevColorHue }) => ({
      colorHue: ColorHueIncrementator.getNextColorHue(prevColorHue),
    }));
  };

  private static getNextColorHue(prevColorHue: number): number {
    return (prevColorHue + 1) % 360;
  }

  private getDelay(): number {
    return this.props.delay || ColorHueIncrementator.defaultDelay;
  }

  public render() {
    return (
      <Interval delay={this.getDelay()} handleInterval={this.changeColorHue}>
        {this.props.render(this.state)}
      </Interval>
    );
  }
}

export default ColorHueIncrementator;
