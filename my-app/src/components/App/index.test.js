import { render, screen } from '@testing-library/react';
import Component from './index';
import { test, expect } from '@jest/globals';
import userEvent from '@testing-library/user-event'
import App from './index'

test('renders learn react link', () => {
const props = {
  handleName: jest.fn(),
}

  render(<App handleName={props.handleName} />);
  const input = screen.getByRole('textbox');
  userEvent.type(input, 'Alice')
  screen.debug();
});