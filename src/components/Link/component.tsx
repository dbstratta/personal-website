import { Link as BaseLink } from 'react-router-dom';
import styled from 'styled-components';

import { linkStyle } from './styles';

export const Link = styled(BaseLink)`
  ${linkStyle};
`;

export default Link;
