import React, { PureComponent } from 'react';
import styled from 'styled-components';

export type NameProps = {
  initialColorHue?: number;
};

export type NameState = {
  colorHue: number;
  changeColorHueInterval: number;
};

const StyledName = styled.div.attrs({
  style: (props: any) => ({
    color: `hsla(${props.colorHue}, 100%, 50%, 1)`,
  }),
})`
  --font-size: var(--xxl-font-size);

  font-family: var(--display-font-family);
  font-size: var(--font-size);

  margin-bottom: var(--xs-space);

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    --font-size: calc(var(--xxl-font-size) * 1.4);
  }
` as any;

const FirstName = styled.div``;
const LastName = styled.div``;

const getPrimaryColorHue = (): number => {
  const primaryColorHue: string = getComputedStyle(
    document.body,
  ).getPropertyValue('--primary-color-hue');

  return parseInt(primaryColorHue, 10);
};

export class Name extends PureComponent<NameProps, NameState> {
  public static defaultProps: Partial<NameProps> = {
    initialColorHue: getPrimaryColorHue(),
  };

  public intervalId: number | null = null;

  public readonly state: NameState = {
    colorHue: 1,
    changeColorHueInterval: 2000,
  };

  public componentDidMount() {
    this.intervalId = window.setInterval(
      this.changeColorHue,
      this.state.changeColorHueInterval,
    );
  }

  public changeColorHue = (): void => {
    this.setState(({ colorHue: prevColorHue }) => {
      const nextColorHue = (prevColorHue + 1) % 360;
      return { colorHue: nextColorHue };
    });
  };

  public componentWillUnmount() {
    if (this.intervalId === null) {
      return;
    }

    window.clearInterval(this.intervalId);
    this.intervalId = null;
  }

  public render() {
    const { colorHue } = this.state;

    return (
      <StyledName colorHue={colorHue}>
        <FirstName>Diego</FirstName>
        <LastName>Stratta</LastName>
      </StyledName>
    );
  }
}

export default Name;
