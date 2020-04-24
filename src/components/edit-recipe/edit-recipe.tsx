import React from 'react'
import Button from '../button/button'
import '../new-recipe/recipe-popup.scss'
import { TRecipe } from '../list/list'

interface IEditRecipe {
  setEditRecipeVisibility: any
  recipe: TRecipe | null | undefined
}

export const EditRecipe: React.FC<IEditRecipe> = ({
  setEditRecipeVisibility,
  recipe,
}) => {
  return (
    <div className="recipe-popup">
      <form className="recipe-popup__form">
        <label>Name:</label>
        <input id="name-input" type="text" value={recipe?.name} />
        <label>Ingredients:</label>
        <input id="ingredients-input" type="text" value={recipe?.ingredients} />
      </form>
      <div className="buttons-field">
        <Button type="save-button" callback={() => null} text="Save" />
        <Button type="delete-button" callback={() => null} text="Delete" />
        <Button callback={() => setEditRecipeVisibility(false)} text="Cancel" />
      </div>
    </div>
  )
}
