import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

    expect(div.innerHTML).toContain('Comment Box');

    ReactDOM.unmountComponentAtNode(div);
})