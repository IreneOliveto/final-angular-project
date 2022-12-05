// state/selectors/recipes.selector.ts

import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { RecipeState } from '../reducers/recipes.reducer';


export const selectRecipeState = (state: AppState) => state.recipeStates;

export const selectRecipes = createSelector(
  selectRecipeState,
  (state: RecipeState) => {
    return state.recipes;
  }
);

export const selectLoading = createSelector(
  selectRecipeState,
  (state: RecipeState) => {
    return state.loading;
  }
);
