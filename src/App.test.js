import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('Hi There!');
  ReactDOM.unmountComponentAtNode(div);
})