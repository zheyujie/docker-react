import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/This is a feature branch/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 2', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/This is a feature branch/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 3', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/This is a feature branch/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link 4', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/This is a feature branch/i);
  expect(linkElement).toBeInTheDocument();
});