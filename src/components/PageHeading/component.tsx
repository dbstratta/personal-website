import React from 'react';
import styled from 'styled-components';

export type PageHeadingProps = Readonly<{
  className?: string;
}>;

const StyledH1 = styled.h1`
  font-size: calc(var(--xl-font-size) * 1.5);
  font-weight: 400;
  margin: var(--xs-space) auto;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: var(--lg-space) auto;
  }
`;

export const PageHeading: React.SFC<PageHeadingProps> = ({
  className,
  children,
}) => <StyledH1 className={className}>{children}</StyledH1>;

export default PageHeading;
