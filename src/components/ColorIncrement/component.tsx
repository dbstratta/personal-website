import React from 'react';
import styled from 'styled-components';

import ColorHueIncrement, {
  ColorHueIncrementProps,
} from '../ColorHueIncrement';

export type ColorIncrementProps = {
  colorHue: number;
  className?: string;
};

const Wrapper = styled.div.attrs({
  style: (props: any) => ({
    color: `hsla(${props.colorHue}, 100%, 50%, 1)`,
  }),
})`
  transition: var(--lg-transition);
` as any;

export const ColorIncrement: React.SFC<ColorIncrementProps> = ({
  colorHue,
  className,
  children,
}) => (
  <Wrapper colorHue={colorHue} className={className}>
    {children}
  </Wrapper>
);

export type EnhancedColorIncrementProps = Pick<
  ColorIncrementProps,
  'className'
> &
  Pick<ColorHueIncrementProps, 'delay' | 'initialColorHue'> & {
    children?: React.ReactNode;
  };

const EnhancedColorIncrement: React.SFC<EnhancedColorIncrementProps> = ({
  delay,
  initialColorHue,
  className,
  children,
}) => (
  <ColorHueIncrement
    delay={delay}
    initialColorHue={initialColorHue}
    render={({ colorHue }) => (
      <ColorIncrement
        className={className}
        colorHue={colorHue}
        children={children}
      />
    )}
  />
);

export default EnhancedColorIncrement;
