import React, { Dispatch, SetStateAction } from 'react'
import Button from '../button/button'
import '../new-recipe/recipe-popup.scss'
import { TRecipe } from '../list/list'

interface IEditRecipe {
  setEditRecipeVisibility: Dispatch<SetStateAction<boolean>>
  handleRecipeDeletion: (id: string | undefined) => void
  handleRecipeUpdate: (
    id: string | undefined,
    name: string | undefined,
    ingredients: string | undefined
  ) => void
  recipe: TRecipe | null | undefined
}

export const EditRecipe: React.FC<IEditRecipe> = ({
  setEditRecipeVisibility,
  handleRecipeDeletion,
  handleRecipeUpdate,
  recipe,
}) => {
  const [nameInput, setNameInput] = React.useState(recipe?.name)
  const [ingredientsInput, setIngredientsInput] = React.useState(
    recipe?.ingredients
  )

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
          onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
            setIngredientsInput(e.currentTarget.value)
          }
        />
      </form>
      <div className="buttons-field">
        <Button
          type="save-button"
          callback={() =>
            handleRecipeUpdate(recipe?.id, nameInput, ingredientsInput)
          }
          text="Save"
        />
        <Button
          type="delete-button"
          callback={() => handleRecipeDeletion(recipe?.id)}
          text="Delete"
        />
        <Button callback={() => setEditRecipeVisibility(false)} text="Cancel" />
      </div>
    </div>
  )
}
