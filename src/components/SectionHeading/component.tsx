import React from 'react';
import styled from 'styled-components';

export type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

const StyledH2 = styled.h2`
  font-size: var(--xl-font-size);
`;

export const SectionHeading = ({
  className,
  children,
}: SectionHeadingProps) => (
  <StyledH2 className={className}>{children}</StyledH2>
);

export default SectionHeading;
