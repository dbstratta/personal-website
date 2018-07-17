import styled from 'styled-components';

const Separator = styled.div`
  background-image: linear-gradient(
    to right,
    transparent,
    transparent 20%,
    var(--separator-color) 50%,
    transparent 80%,
    transparent
  );

  height: 0.07rem;
  width: 100%;

  margin: 0;
  padding: 0;
  border: none;
`;

export default Separator;
