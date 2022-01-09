import { render, screen } from '@testing-library/react'
import App from './App.jsx'

test('Renders Initial load time', () => {
  render(<App />)
  const loadTimeElement = screen.getByText(/Load time: 0ms/i)
  expect(loadTimeElement).toBeInTheDocument()
})

test('Renders Initial items counter', () => {
  render(<App />)
  // const loadTimeElement = screen.getByText(/Result count/i)
  const timerElement = screen.getByText(/Result count: 0 items/i)
  // expect(loadTimeElement).toBeInTheDocument()
  expect(timerElement).toBeInTheDocument()
})

test('Render Initial Search input', () => {
  render(<App />)
  const searchInput = screen.getByPlaceholderText(/Find.../i)
  expect(searchInput).toBeInTheDocument()
})
