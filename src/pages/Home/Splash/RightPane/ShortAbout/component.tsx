import React from 'react';
import styled from 'styled-components';

import Link from '../../../../../components/Link';

export const ShortAbout: React.SFC = () => (
  <Wrapper>
    Hi! I&apos;m a full-stack web developer from Montevideo, Uruguay.{' '}
    <ReadMoreWrapper>
      <Link to="/about">Read more</Link>.
    </ReadMoreWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  text-align: center;
  color: var(--secondary-font-color);
  font-size: calc(var(--lg-font-size) * 1.2);
  font-family: var(--serif-font-family);
  line-height: 1.3;

  margin-bottom: var(--md-space);
  cursor: text;

  &::first-letter {
    font-size: 1.3em;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    text-align: start;
  }
`;

const ReadMoreWrapper = styled.span`
  animation: var(--wait-and-fade-in-keyframe) 3s;
`;

export default ShortAbout;
