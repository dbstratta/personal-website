import { OutboundLink as BaseOutboundLink } from 'react-ga';
import styled from 'styled-components';

import { linkStyle } from '../Link';

export const OutboundLink = styled(BaseOutboundLink)`
  ${linkStyle};
`;

export default OutboundLink;
