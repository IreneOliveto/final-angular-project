// state/app.state.ts

import { ActionReducerMap } from "@ngrx/store";
import { recipesReducer, RecipeState } from "./reducers/recipes.reducer"
import { recipeDetailsReducer, RecipeDetailState } from "./reducers/recipe-details.reducer";
import { createRecipeReducer, CreateRecipeState } from "./reducers/create-recipe.reducer";


export interface AppState {
  recipeStates: RecipeState;
  recipeDetailStates: RecipeDetailState;
  createRecipeStates: CreateRecipeState

}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  recipeStates: recipesReducer,
  recipeDetailStates: recipeDetailsReducer,
  createRecipeStates: createRecipeReducer

};
