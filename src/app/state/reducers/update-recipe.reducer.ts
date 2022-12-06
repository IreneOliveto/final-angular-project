import { createReducer, on } from "@ngrx/store";
import { Recipe } from "src/app/models/recipe.model";
import { updateRecipeSuccess } from "../actions/update-recipe.action";

export interface UpdateRecipeState {
  updated: boolean,
  recipe: Recipe,
}

export const initialState: UpdateRecipeState = {
  updated: false,
  recipe: {} as Recipe,
};

export const updateRecipeReducer = createReducer(
  initialState,
  on(updateRecipeSuccess, (state, { recipe }) => {
    return {
      ...state,
      recipe: recipe,
    };
  })
);
