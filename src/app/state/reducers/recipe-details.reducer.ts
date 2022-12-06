// recipe-details.reducer.ts

import { createReducer, on } from "@ngrx/store";
import { Recipe } from "src/app/models/recipe.model";
import { loadRecipe } from "../actions/recipe-details.action";

export interface RecipeDetailState {
  recipe: Recipe,
}

export const initialState: RecipeDetailState = {
  recipe: {} as Recipe,
};

export const recipeDetailsReducer = createReducer(
  initialState,
  on(loadRecipe, (state, { recipe }) => {
    return {
      ...state,
      recipe: recipe,
    };
  })
);
