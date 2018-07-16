import React from 'react';
import styled from 'styled-components';

import Link from '../../../../../components/Link';

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

const ReadMoreWrapper = styled.span`
  animation: var(--wait-and-fade-in-keyframe) 3s;
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
