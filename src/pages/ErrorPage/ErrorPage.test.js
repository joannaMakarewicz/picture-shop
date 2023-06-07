import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './ErrorPage';

test('renders Error component', () => {
  render(<Error />);
  const linkElement = screen.getByText(/Error/i);
  expect(linkElement).toBeInTheDocument();
});