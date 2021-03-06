import React, { Dispatch, SetStateAction } from 'react'
import Button from '../button/button'
import '../new-recipe/recipe-details.scss'
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
            handleRecipeUpdate(recipe?.id, nameInput, ingredientsInput)
          }
          text="Save"
          disabled={!(nameInput && ingredientsInput)}
          type={
            nameInput && ingredientsInput ? 'save-button' : 'disabled-button'
          }
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
