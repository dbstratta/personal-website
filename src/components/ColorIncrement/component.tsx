import React from 'react';
import styled from 'styled-components';

import ColorHueIncrement, {
  ColorHueIncrementProps,
} from '../ColorHueIncrement';

export type BaseColorIncrementProps = Readonly<{
  colorHue: number;
  className?: string;
}>;

type WrapperCustomProps = Pick<BaseColorIncrementProps, 'colorHue'>;

const Wrapper = styled.div.attrs<WrapperCustomProps>({
  style: (
    props: React.HTMLAttributes<HTMLDivElement> & WrapperCustomProps,
  ) => ({
    color: `hsla(${props.colorHue}, 100%, 50%, 1)`,
  }),
})`
  transition: var(--lg-transition);
`;

export const BaseColorIncrement: React.SFC<BaseColorIncrementProps> = ({
  colorHue,
  className,
  children,
}) => (
  <Wrapper colorHue={colorHue} className={className}>
    {children}
  </Wrapper>
);

export type ColorIncrementProps = Pick<BaseColorIncrementProps, 'className'> &
  Pick<ColorHueIncrementProps, 'delay' | 'initialColorHue'> & {
    children?: React.ReactNode;
  };

const ColorIncrement: React.SFC<ColorIncrementProps> = ({
  delay,
  initialColorHue,
  className,
  children,
}) => (
  <ColorHueIncrement
    delay={delay}
    initialColorHue={initialColorHue}
    render={({ colorHue }) => (
      <BaseColorIncrement className={className} colorHue={colorHue}>
        {children}
      </BaseColorIncrement>
    )}
  />
);

export default ColorIncrement;
