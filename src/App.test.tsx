import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import App from './App'

describe('Recipe Box', () => {
  test('should be able to see the list of recipes', () => {
    render(<App />)

    expect(screen.getByTestId(/recipes-list/i)).toBeTruthy()
  })

  test('should be able to click on add new button', () => {
    render(<App />)

    fireEvent.click(screen.getByText(/add new/i))
  })
})
