// delete-recipe.reducer.ts

import { createReducer, on } from "@ngrx/store";
import { Recipe } from "src/app/models/recipe.model";
import { deleteRecipe } from "../actions/delete-recipe.action";

export interface DeleteRecipeState {
  recipe: Recipe,
}

export const initialState: DeleteRecipeState = {
  recipe: {} as Recipe,
};

export const deleteRecipeReducer = createReducer(
  initialState,
  on(deleteRecipe, (state, { recipe }) => {
    return {
      ...state,
      recipe: recipe,
    };
  })
);
