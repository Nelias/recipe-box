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
  const [recipesList, setRecipesList]: TRecipe | any = React.useState([])
  const [currentlyEditedRecipe, setCurrentylEditedRecipe] = React.useState(null)

  React.useEffect(() => {
    if (typeof Storage !== 'undefined') {
      if (localStorage.recipes) {
        setRecipesList(JSON.parse(localStorage.recipes))
      } else {
        setRecipesList([
          {
            id: 'xzskj123j12lkj123szasd',
            name: 'Burger',
            ingredients: 'beef, bun, tomato, salad, mayo, pickle',
          },
          {
            id: 'yhdjdfe12j12lkj123sf234s',
            name: 'Sweet Potato Chips',
            ingredients: 'sweet potato, oil, salt',
          },
          {
            id: 'hgfghfgj2j12lkj123sf234kj',
            name: 'Pizza',
            ingredients:
              '500 g of flour,\n200 g of tomatoes,\n200 g of cheese,\n100 ml of water,\n20 g of garlic,\n5 g of oregano',
          },
        ])
      }
    } else {
      return
    }
  }, [])

  const handleNewRecipe = (recipe: TRecipe) => {
    const newList = [...recipesList, recipe]
    setRecipesList(newList)
    setNewRecipeVisibility(false)
    localStorage.recipes = JSON.stringify(newList)
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
    localStorage.recipes = JSON.stringify(newList)
  }

  const handleRecipeUpdate = (
    id: string | undefined,
    name: string | undefined,
    ingredients: string | undefined
  ) => {
    const newList = recipesList.map((elem: TRecipe) =>
      elem.id === id
        ? {
            ...elem,
            name,
            ingredients,
          }
        : elem
    )

    setRecipesList(newList)
    setEditRecipeVisibility(false)
    localStorage.recipes = JSON.stringify(newList)
  }

  const handleListReorder = (draggedID: string, newPosition: number) => {
    const movedItem = recipesList.find((item: TRecipe) => item.id === draggedID)
    const remainingItems = recipesList.filter(
      (item: TRecipe) => item.id !== draggedID
    )

    const reorderedList = [
      ...remainingItems.slice(0, newPosition),
      movedItem,
      ...remainingItems.slice(newPosition),
    ]

    setRecipesList(reorderedList)
    localStorage.recipes = JSON.stringify(reorderedList)
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
            handleListReorder={handleListReorder}
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
