// state/selectors/apartment-details.selector.ts

import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { DeleteRecipeState } from '../reducers/delete-recipe.reducer';

export const selectDeleteRecipeState = (state: AppState) => state.deleteRecipeStates;

export const deleteRecipe = createSelector(
  selectDeleteRecipeState,
  (state: DeleteRecipeState) => {
    return state.recipe;
  }
);
