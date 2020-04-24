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
  return (
    <div className="recipe-popup">
      <form className="recipe-popup__form">
        <label>Name:</label>
        <input id="name-input" type="text"></input>
        <label>Ingredients:</label>
        <input id="ingredients-input" type="text"></input>
      </form>
      <div className="buttons-field">
        <Button
          callback={() =>
            handleNewRecipe({ id: uuid(), name: 'Some', ingredients: 'More' })
          }
          text="Add Recipe"
          type="save-button"
        />
        <Button callback={() => setNewRecipeVisibility(false)} text="Cancel" />
      </div>
    </div>
  )
}
