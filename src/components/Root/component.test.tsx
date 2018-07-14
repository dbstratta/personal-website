import { shallow } from 'enzyme';
import React from 'react';

import theme from '../../theme';
import Root from './component';

describe('<Root />', () => {
  test('renders without crashing', () => {
    shallow(<Root theme={theme} />);
  });
});
