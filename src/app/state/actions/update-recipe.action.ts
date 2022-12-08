import { createAction, props } from "@ngrx/store";
import { Recipe } from "src/app/models/recipe.model";

export const updatingRecipe = createAction(
  '[Update Recipe] Updating Recipe',
  props<{ recipe: Recipe }>()
);

export const updateRecipeSuccess = createAction(
  '[Update Recipe] Update Recipe Success',
);
