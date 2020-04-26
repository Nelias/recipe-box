import React from 'react'
import './list.scss'
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd'

export type TRecipe = {
  id: string
  name: string
  ingredients: string
}

export interface IList {
  recipes: TRecipe[]
  handleRecipeEdit: (id: string) => void
  handleListReorder: (draggedID: string, newPosition: number) => void
}

export const RecipesList: React.FC<IList> = ({
  recipes,
  handleRecipeEdit,
  handleListReorder,
}) => {
  return (
    <DragDropContext
      onDragEnd={(result: any) => {
        handleListReorder(result.draggableId, result.destination.index)
      }}
    >
      <Droppable droppableId="droppable">
        {(provided) => (
          <ul
            className="recipes-list"
            data-testid="recipes-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {recipes.length < 1 ? (
              <li className="error-message">No recipes found!</li>
            ) : recipes.length === 1 ? (
              <li
                data-testid="list-item"
                onClick={() => handleRecipeEdit(recipes[0].id)}
                ref={provided.innerRef}
              >
                {recipes[0].name}
              </li>
            ) : (
              recipes.map((recipe: TRecipe, index: number) => (
                <Draggable
                  key={recipe.id}
                  draggableId={recipe.id}
                  index={index}
                >
                  {(provided) => (
                    <li
                      data-testid="list-item"
                      onClick={() => handleRecipeEdit(recipe.id)}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {recipe.name}
                    </li>
                  )}
                </Draggable>
              ))
            )}

            <div className="custom-placeholder">{provided.placeholder}</div>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}
