import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;

  height: 100vh;

  --primary-background-color: hsla(360, 72%, 65%, 1);
  --secondary-background-color: hsla(235, 62%, 65%, 1);

  --background: linear-gradient(
    135deg,
    var(--primary-background-color),
    var(--secondary-background-color)
  );

  background-image: var(--background);
  background-repeat: no-repeat;
`;

const Splash = () => <Wrapper>hola</Wrapper>;

export default Splash;
