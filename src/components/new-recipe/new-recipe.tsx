import React from 'react'
import Button from '../button/button'
import './recipe-popup.scss'

export const NewRecipe: React.FC = () => {
  return (
    <div className="recipe-popup">
      <form className="recipe-popup__form">
        <label>Name:</label>
        <input id="name-input" type="text"></input>
        <label>Ingredients:</label>
        <input id="ingredients-input" type="text"></input>
      </form>
      <Button callback={() => null} text="Add Recipe" />
    </div>
  )
}
