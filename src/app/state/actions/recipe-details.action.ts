// state/actions/recipe-details.action.ts

import { createAction, props } from "@ngrx/store";
import { Recipe } from "src/app/models/recipe.model";

export const loadingRecipe = createAction(
  '[Recipe Details] Loading Recipe',
  props<{ id: string }>()
);

export const loadRecipe = createAction(
  '[Recipe Details] Load Recipe',
  props<{ recipe: Recipe }>()
);
