import React from 'react'
import Button from '../button/button'
import './recipe-popup.scss'
import { v4 as uuid } from 'uuid'

interface INewRecipe {
  handleNewRecipe: any
  setNewRecipeVisibility: any
}

export const NewRecipe: React.FC<INewRecipe> = ({
  handleNewRecipe,
  setNewRecipeVisibility,
}) => {
  const [nameInput, setNameInput] = React.useState('')
  const [ingredientsInput, setIngredientsInput] = React.useState('')

  return (
    <div className="recipe-popup">
      <form className="recipe-popup__form">
        <label>Name:</label>
        <input
          id="name-input"
          type="text"
          value={nameInput}
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            setNameInput(e.currentTarget.value)
          }
        />
        <label>Ingredients:</label>
        <textarea
          id="ingredients-input"
          value={ingredientsInput}
          placeholder="separate with a comma"
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
          disabled={nameInput && ingredientsInput ? false : true}
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
