import React from 'react'
import './App.scss'
import { RecipesHeader } from './components/header/header'
import { RecipesList, TRecipe } from './components/list/list'
import Button from './components/button/button'
import { NewRecipe } from './components/new-recipe/new-recipe'
import { EditRecipe } from './components/edit-recipe/edit-recipe'

function App() {
  const [isNewRecipeVisible, setNewRecipeVisibility] = React.useState(false)
  const [isEditRecipeVisible, setEditRecipeVisibility] = React.useState(false)
  const [recipesList, setRecipesList]: any = React.useState([
    { id: 'sakj123j12lkj123sfdfs', name: 'Burger', ingredients: 'bun' },
    {
      id: 'sdfe12j12lkj123sfdfs',
      name: 'Sweet Potato Chips',
      ingredients: 'oil',
    },
    {
      id: 'hgfghfgj2j12lkj123sfdfs',
      name: 'Pizza',
      ingredients: 'tomatoes, cheese',
    },
  ])
  const [currentlyEditedRecipe, setCurrentylEditedRecipe] = React.useState(null)

  const handleNewRecipe = (recipe: TRecipe) => {
    const newList = [...recipesList, recipe]
    setRecipesList(newList)
    setNewRecipeVisibility(false)
  }

  const handleRecipeEdit = (id: string) => {
    setCurrentylEditedRecipe(
      recipesList.find((elem: TRecipe) => elem.id === id)
    )
    setEditRecipeVisibility(true)
  }

  const handleRecipeDeletion = (id: string | undefined) => {
    const newList = recipesList.filter((elem: TRecipe) => elem.id !== id)
    setRecipesList(newList)
    setEditRecipeVisibility(false)
  }

  const handleRecipeUpdate = (
    id: string | undefined,
    name: string | undefined,
    ingredients: string | undefined
  ) => {
    const editedRecipeIndex = recipesList.findIndex(
      (elem: TRecipe) => elem.id === id
    )

    const updatedRecipe = { currentlyEditedRecipe, name, ingredients }

    const newList = recipesList

    newList[editedRecipeIndex] = updatedRecipe

    setRecipesList(newList)
    setEditRecipeVisibility(false)
  }

  return (
    <div className="app">
      <RecipesHeader />
      {isNewRecipeVisible && (
        <NewRecipe
          handleNewRecipe={handleNewRecipe}
          setNewRecipeVisibility={setNewRecipeVisibility}
        />
      )}
      {isEditRecipeVisible && (
        <EditRecipe
          setEditRecipeVisibility={setEditRecipeVisibility}
          handleRecipeDeletion={handleRecipeDeletion}
          handleRecipeUpdate={handleRecipeUpdate}
          recipe={currentlyEditedRecipe}
        />
      )}
      {!(isEditRecipeVisible || isNewRecipeVisible) && (
        <>
          <RecipesList
            recipes={recipesList}
            handleRecipeEdit={handleRecipeEdit}
          />
          <Button
            callback={() => setNewRecipeVisibility(true)}
            text="Add New"
          />
        </>
      )}
    </div>
  )
}

export default App
