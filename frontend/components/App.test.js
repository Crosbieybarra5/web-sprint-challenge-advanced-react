import React from 'react';
import { render, screen,} from '@testing-library/react';
import AppFunctional from './AppFunctional';
import userEvent from '@testing-library/user-event';


// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

beforeEach(() => {
  render(<AppFunctional />)
})
afterEach(() => {
  document.body.innerHTML = ''
})

test('Renders with original coordinates', () => {
  const coordinates = screen.getByText('Coordinates: (2, 2)')
  expect(coordinates).toBeTruthy();
})

test('Up works', () => {
  const up = document.querySelector('#up')
  userEvent.click(up);

  const coordinates = screen.getByText('Coordinates: (3, 1)')
  const steps = screen.getByText('You moved 2 times');

  expect(coordinates).toBeTruthy();
  expect(steps).toBeTruthy();
})