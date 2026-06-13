import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App shell', () => {
  it('renders Medicare App title', () => {
    render(<App />)
    const h1 = screen.getAllByRole('heading', { level: 1 })[0]
    expect(h1.textContent).toMatch(/Medicare App/i)
  })
})
