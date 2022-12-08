import { createAction, props } from "@ngrx/store";
import { Recipe } from "src/app/models/recipe.model";

export const initCreateRecipe = createAction(
  '[Create Recipe] Init Create Recipe',
);

export const createRecipe = createAction(
  '[Create Recipe] Create Recipe',
    props<{ recipe: Recipe }>()
);

export const createRecipeSuccess = createAction(
  '[Create Recipe] Create Recipe Success',
);
