// state/reducers/create-recipe.reducer.ts

import { createReducer, on } from "@ngrx/store";
import { createRecipeSuccess, initCreateRecipe } from "../actions/create-recipe.action";

export interface CreateRecipeState {
  created: boolean,
}

export const initialState: CreateRecipeState = {
  created: false,
};

export const createRecipeReducer = createReducer(
  initialState,
  on(initCreateRecipe, (state) => {
    return {
      ...state,
      created: false,
    };
  }),
  on(createRecipeSuccess, (state) => {
    return {
      ...state,
      created: true,
    };
  })
);
