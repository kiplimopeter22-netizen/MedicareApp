import { render, screen } from '@testing-library/react'
import App from './App'

test('shows contact info in top bar', () => {
  render(<App />)
  expect(screen.getByText(/contact@medicareapp.com/i)).toBeInTheDocument()
  expect(screen.getByText(/123 Health Ave/i)).toBeInTheDocument()
})
