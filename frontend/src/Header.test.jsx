import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('shows contact info in top bar', () => {
  render(<App />)
  const emails = screen.getAllByText(/contact@medicareapp.com/i)
  expect(emails.length).toBeGreaterThan(0)
  const addresses = screen.getAllByText(/123 Health Ave/i)
  expect(addresses.length).toBeGreaterThan(0)
})
