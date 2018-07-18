import React from 'react';
import styled from 'styled-components';

export type SectionHeadingProps = Readonly<{
  className?: string;
}>;

const StyledH2 = styled.h2`
  font-size: var(--xl-font-size);
  font-weight: 400;
`;

export const SectionHeading: React.SFC<SectionHeadingProps> = ({
  className,
  children,
}) => <StyledH2 className={className}>{children}</StyledH2>;

export default SectionHeading;
