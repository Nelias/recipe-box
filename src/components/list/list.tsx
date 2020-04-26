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
    <ul className="recipes-list" data-testid="recipes-list">
      {recipes.length < 1 ? (
        <li className="error-message">No recipes found!</li>
      ) : (
        recipes.map((recipe: TRecipe) => {
          return (
            <li
              data-testid="list-item"
              key={recipe.id}
              onClick={() => handleRecipeEdit(recipe.id)}
            >
              {recipe.name}
            </li>
          )
        })
      )}
    </ul>
  )
}
