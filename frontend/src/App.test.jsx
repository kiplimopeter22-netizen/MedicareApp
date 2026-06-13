import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App shell', () => {
  it('renders Medicare App title', () => {
    render(<App />)
    expect(screen.getByText(/Medicare App/i)).toBeInTheDocument()
  })
})
