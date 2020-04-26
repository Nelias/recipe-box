import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { NewRecipe } from './new-recipe'

describe('Add new recipe section', () => {
  beforeEach(() => {
    render(
      <NewRecipe
        handleNewRecipe={() => null}
        setNewRecipeVisibility={() => null}
      />
    )
  })

  test('should fill the new recipe form', () => {
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'Tortilla' },
    })

    fireEvent.change(screen.getByLabelText(/ingredients/i), {
      target: { value: 'salad, tomato' },
    })
  })

  test('should cancel the recipe addition', () => {
    fireEvent.click(screen.getByText(/cancel/i))
  })
})
