import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';

it('renders Tajiri Tozan', async () => {
  const { getByText } = render(<App />);

  await waitFor(() => {
    getByText(/Tajiri Tozan/i);
  });
});

it('snapshot testing', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
