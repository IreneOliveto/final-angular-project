// state/app.state.ts

import { ActionReducerMap } from "@ngrx/store";
import { recipesReducer, RecipeState } from "./reducers/recipes.reducer"
import { recipeDetailsReducer, RecipeDetailState } from "./reducers/recipe-details.reducer";
import { createRecipeReducer, CreateRecipeState } from "./reducers/create-recipe.reducer";
import { deleteRecipeReducer, DeleteRecipeState } from "./reducers/delete-recipe.reducer";
import { updateRecipeReducer, UpdateRecipeState } from "./reducers/update-recipe.reducer";

export interface AppState {
  recipeStates: RecipeState;
  recipeDetailStates: RecipeDetailState;
  createRecipeStates: CreateRecipeState;
  deleteRecipeStates: DeleteRecipeState;
  updateRecipeStates: UpdateRecipeState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  recipeStates: recipesReducer,
  recipeDetailStates: recipeDetailsReducer,
  createRecipeStates: createRecipeReducer,
  deleteRecipeStates: deleteRecipeReducer,
  updateRecipeStates: updateRecipeReducer
};
