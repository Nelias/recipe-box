import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { RecipesList } from './list'

describe('List of recipes', () => {
  test('should be able to see a list of recipes', () => {
    render(
      <RecipesList
        recipes={[{ id: '1234', name: 'Pizza', ingredients: 'cheese' }]}
        handleRecipeEdit={() => null}
      />
    )

    expect(screen.getByTestId(/recipes-list/i)).toBeTruthy()
    expect(screen.getByTestId(/list-item/i)).toBeTruthy()
  })

  test('should be able to see a not found message', () => {
    render(<RecipesList recipes={[]} handleRecipeEdit={() => null} />)

    expect(screen.queryByTestId(/list-item/i)).toBeNull()
  })
})
