import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from '../../Link';

import Separator from '../../Separator';
import Social from './Social';

const Wrapper = styled.div`
  justify-self: center;
  align-self: start;

  width: 100%;
  margin-top: var(--lg-space);

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    justify-self: start;
    align-self: center;

    width: 60%;
    margin-top: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  70% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ReadMoreWrapper = styled.span`
  animation: ${fadeIn} 3s;
`;

const About = styled.div`
  color: var(--secondary-font-color);
  font-size: calc(var(--lg-font-size) * 1.2);
  font-family: var(--serif-font-family);

  margin-bottom: var(--md-space);

  &::first-letter {
    font-size: 1.3em;
  }
`;

const StyledSocial = styled(Social)`
  margin-top: var(--md-space);
  text-align: center;
`;

export const RightPane = () => (
  <Wrapper>
    <About>
      Hi! I'm a full-stack web developer from Montevideo, Uruguay.{' '}
      <ReadMoreWrapper>
        <Link to={{ hash: '#about' }}>Read more</Link>.
      </ReadMoreWrapper>
    </About>
    <Separator />
    <StyledSocial />
  </Wrapper>
);

export default RightPane;
