// state/reducers/recipes.reducer.ts

import { createReducer, on } from "@ngrx/store";
import { Recipe } from "src/app/models/recipe.model";
import { loadingRecipes, loadRecipes } from "../actions/recipes.action";

export interface RecipeState {
  loading: boolean,
  recipes: Recipe[],
}

export const initialState: RecipeState = {
  recipes: [],
  loading: false,
};

export const recipesReducer = createReducer(
  initialState,
  on(loadingRecipes, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(loadRecipes, (state, { recipes }) => {
    return {
      ...state,
      recipes: recipes,
      loading: false,
    };
  })
);

