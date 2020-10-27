import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders test text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to React/i);
  expect(linkElement).toBeInTheDocument();
});
