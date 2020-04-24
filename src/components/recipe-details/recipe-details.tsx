import React from 'react'
import Button from '../button/button'
import './new-recipe.scss'

export const EditRecipe: React.FC = () => {
  return (
    <div className="recipe-popup">
      <form className="recipe-popup__form">
        <label>Name:</label>
        <input id="name-input" type="text"></input>
        <label>Ingredients:</label>
        <input id="ingredients-input" type="text"></input>
      </form>
      <Button callback={() => null} text="Edit Recipe" />
    </div>
  )
}
