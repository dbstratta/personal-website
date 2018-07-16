import React from 'react';
import styled from 'styled-components';

export type SectionHeadingProps = Readonly<{
  className?: string;
}>;

const StyledH2 = styled.h2`
  font-size: calc(var(--xl-font-size) * 1.5);
  font-weight: 400;
`;

export const SectionHeading: React.SFC<SectionHeadingProps> = ({
  className,
  children,
}) => <StyledH2 className={className}>{children}</StyledH2>;

export default SectionHeading;
