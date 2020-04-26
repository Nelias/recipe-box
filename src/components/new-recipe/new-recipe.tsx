import React from 'react'
import Button from '../button/button'
import './recipe-details.scss'
import { v4 as uuid } from 'uuid'
import { TRecipe } from '../list/list'

interface INewRecipe {
  handleNewRecipe: (recipe: TRecipe) => void
  setNewRecipeVisibility: (
    value: boolean | ((prevValue: boolean) => boolean)
  ) => void
}

export const NewRecipe: React.FC<INewRecipe> = ({
  handleNewRecipe,
  setNewRecipeVisibility,
}) => {
  const [nameInput, setNameInput] = React.useState('')
  const [ingredientsInput, setIngredientsInput] = React.useState('')

  return (
    <div className="recipe-details">
      <form className="recipe-details__form">
        <label htmlFor="name-input">Name:</label>
        <input
          id="name-input"
          type="text"
          value={nameInput}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setNameInput(e.currentTarget.value)
          }
        />
        <label htmlFor="ingredients-input">Ingredients:</label>
        <textarea
          id="ingredients-input"
          value={ingredientsInput}
          placeholder="You can't make a dish out of nothing"
          onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
            setIngredientsInput(e.currentTarget.value)
          }
        />
      </form>
      <div className="buttons-field">
        <Button
          callback={() =>
            handleNewRecipe({
              id: uuid(),
              name: nameInput,
              ingredients: ingredientsInput,
            })
          }
          disabled={!(nameInput && ingredientsInput)}
          text="Add Recipe"
          type={
            nameInput && ingredientsInput ? 'save-button' : 'disabled-button'
          }
        />
        <Button callback={() => setNewRecipeVisibility(false)} text="Cancel" />
      </div>
    </div>
  )
}
