import React from 'react'
import './App.scss'
import { RecipesHeader } from './components/header/header'
import { RecipesList } from './components/list/list'
import Button from './components/button/button'
import { NewRecipe } from './components/new-recipe/new-recipe'

function App() {
  return (
    <div className="app">
      <RecipesHeader />
      {false && <NewRecipe />}
      <RecipesList recipes={[]} />
      <Button callback={() => null} text="Add New" />
    </div>
  )
}

export default App
