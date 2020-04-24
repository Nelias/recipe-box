import React from 'react'
import './list.scss'

type TRecipe = {
  id: string
  name: string
  ingredients: string
}

interface IList {
  recipes: TRecipe[]
}

export const RecipesList: React.FC<IList> = ({ recipes }) => {
  return (
    <ul className="recipes-list">
      {recipes.map((recipe: TRecipe) => {
        return <li>{recipe.name}</li>
      })}
      <li>Sweet Potato Chips</li>
      <li>Pizza</li>
    </ul>
  )
}
