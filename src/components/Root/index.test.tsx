import React from 'react';
import ReactDOM from 'react-dom';
import Root from './component';

describe('<Root />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Root />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
