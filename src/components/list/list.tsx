import React from 'react'
import './list.scss'

export type TRecipe = {
  id: string
  name: string
  ingredients: string
}

export interface IList {
  recipes: TRecipe[]
  handleRecipeEdit: any
}

export const RecipesList: React.FC<IList> = ({ recipes, handleRecipeEdit }) => {
  return (
    <ul className="recipes-list">
      {recipes.map((recipe: TRecipe) => {
        return (
          <li key={recipe.id} onClick={() => handleRecipeEdit(recipe.id)}>
            {recipe.name}
          </li>
        )
      })}
    </ul>
  )
}
