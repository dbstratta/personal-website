import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: center;
  line-height: 3rem;

  font-family: var(--handwriting-font-family);
  font-size: calc(var(--xl-font-size));

  color: var(--secondary-font-color);
  text-transform: lowercase;

  transition: var(--lg-transition);

  &:hover {
    color: var(--primary-font-color);
  }
`;

export const JobTitle: React.SFC = () => <StyledDiv>Web Developer</StyledDiv>;

export default JobTitle;
