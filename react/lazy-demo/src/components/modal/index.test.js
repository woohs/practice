import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './index';

it('renders Modal', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal />, div);
  ReactDOM.unmountComponentAtNode(div);
})