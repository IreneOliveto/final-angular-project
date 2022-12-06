// state/selectors/apartment-details.selector.ts

import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { RecipeDetailState } from '../reducers/recipe-details.reducer';

export const selectRecipeDetailState = (state: AppState) => state.recipeDetailStates;

export const selectRecipe = createSelector(
  selectRecipeDetailState,
  (state: RecipeDetailState) => {
    return state.recipe;
  }
);
