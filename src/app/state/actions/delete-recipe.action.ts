// state/actions/delete-recipe.action.ts

import { createAction, props } from "@ngrx/store";
import { Recipe } from "src/app/models/recipe.model";

export const deletingRecipe = createAction(
  '[Delete Recipe] Deleting Recipe',
  props<{ id: string }>()
);

export const deleteRecipe = createAction(
  '[Delete Recipe] Delete Recipe',
  props<{ recipe: Recipe }>()
);
