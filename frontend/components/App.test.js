import React from 'react';
import { render} from '@testing-library/react';
import AppFunctional from './AppFunctional';



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


