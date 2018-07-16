import React from 'react';
import styled, { keyframes } from 'styled-components';

import Link from '../../../Link';

const Wrapper = styled.div`
  color: var(--secondary-font-color);
  font-size: calc(var(--lg-font-size) * 1.2);
  font-family: var(--serif-font-family);
  line-height: 1.3;

  margin-bottom: var(--md-space);
  cursor: text;

  &::first-letter {
    font-size: 1.3em;
  }
`;

const fadeInKeyframe = keyframes`
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
  animation: ${fadeInKeyframe} 3s;
`;

export const ShortAbout = () => (
  <Wrapper>
    Hi! I'm a full-stack web developer from Montevideo, Uruguay.{' '}
    <ReadMoreWrapper>
      <Link to={{ hash: '#about' }}>Read more</Link>.
    </ReadMoreWrapper>
  </Wrapper>
);

export default ShortAbout;
