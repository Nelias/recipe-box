import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { EditRecipe } from './edit-recipe'

describe('Edit recipe details', () => {
  beforeEach(() => {
    render(
      <EditRecipe
        recipe={{ id: '1234', name: 'Pizza', ingredients: 'cheese' }}
        setEditRecipeVisibility={() => null}
        handleRecipeDeletion={() => null}
        handleRecipeUpdate={() => null}
      />
    )
  })

  test('should edit the recipe name and ingredients', () => {
    expect(
      fireEvent.change(screen.getByLabelText(/name/i), {
        target: { value: 'Tortilla' },
      })
    ).toBeTruthy()

    expect(
      fireEvent.change(screen.getByLabelText(/ingredients/i), {
        target: { value: 'salad, tomato' },
      })
    ).toBeTruthy()

    fireEvent.click(screen.getByText(/save/i))
  })

  test('should delete the recipe', () => {
    fireEvent.click(screen.getByText(/delete/i))
  })

  test('should cancel the recipe edit', () => {
    fireEvent.click(screen.getByText(/cancel/i))
  })
})
