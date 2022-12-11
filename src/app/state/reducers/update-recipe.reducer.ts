
import { createReducer, on } from "@ngrx/store";
import { Recipe } from "src/app/models/recipe.model";
import { updateRecipeSuccess } from "../actions/update-recipe.action";

export interface UpdateRecipeState {
  updated: boolean,
}

export const initialState: UpdateRecipeState = {
  updated: false,
};

export const updateRecipeReducer = createReducer(
  initialState,
  on(updateRecipeSuccess, (state) => {
    return {
      ...state,
      updated: true,
    };
  })
);
