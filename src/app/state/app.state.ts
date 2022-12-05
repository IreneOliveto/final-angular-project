// state/app.state.ts

import { ActionReducerMap } from "@ngrx/store";
import { recipesReducer, RecipeState } from "./reducers/recipes.reducer"

export interface AppState {
  recipeStates: RecipeState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  recipeStates: recipesReducer,
};
