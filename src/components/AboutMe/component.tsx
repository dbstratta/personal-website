import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: var(--main-content-width);
  margin: var(--xl-space) auto;
`;

export const AboutMe = () => <Wrapper id="about">about</Wrapper>;

export default AboutMe;
