// state/actions/recipes.action.ts

import { createAction, props } from "@ngrx/store";
import { Recipe } from "src/app/models/recipe.model";

export const loadingRecipes = createAction(
  '[Recipes] Loading Recipes',

);

export const loadRecipes = createAction(
  '[Recipes] Load Recipes',
  props<{ recipes: Recipe[] }>()
);
