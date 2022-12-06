// state/selectors/create-recipe.selector.ts

import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreateRecipeState } from '../reducers/create-recipe.reducer';


export const selectCreateRecipeState = (state: AppState) => state.createRecipeStates;

export const selectCreateRecipeSuccess = createSelector(
  selectCreateRecipeState,
  (state: CreateRecipeState) => {
    return state.created;
  }
);
