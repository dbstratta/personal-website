import React, { PureComponent } from 'react';

import theme from '../../theme';
import Interval from '../Interval';

export type ColorHueIncrementProps = Readonly<{
  delay?: number;
  initialColorHue?: number;
  render: (state: ColorHueIncrementState) => React.ReactNode;
}>;

export type ColorHueIncrementState = Readonly<{
  colorHue: number;
}>;

export class ColorHueIncrement extends PureComponent<
  ColorHueIncrementProps,
  ColorHueIncrementState
> {
  public static defaultProps = {
    delay: 2000,
    initialColorHue: theme.colors.primaryColorHue,
  };

  public state = { colorHue: this.props.initialColorHue! };

  private changeColorHue = (): void => {
    this.setState(({ colorHue: prevColorHue }) => ({
      colorHue: ColorHueIncrement.getNextColorHue(prevColorHue),
    }));
  };

  private static getNextColorHue(prevColorHue: number): number {
    return (prevColorHue + 1) % 360;
  }

  public render() {
    return (
      <>
        <Interval
          delay={this.props.delay!}
          handleInterval={this.changeColorHue}
        />
        {this.props.render(this.state)}
      </>
    );
  }
}

export default ColorHueIncrement;
