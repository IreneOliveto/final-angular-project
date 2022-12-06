// state/actions/apartment-details.action.ts

import { createAction, props } from "@ngrx/store";
import { Recipe } from "src/app/models/recipe.model";

export const loadingRecipe = createAction(
  '[Recipe Details] Loading Apartment',
  props<{ id: string }>()
);

export const loadRecipe = createAction(
  '[Recipe Details] Load Recipe',
  props<{ recipe: Recipe }>()
);
