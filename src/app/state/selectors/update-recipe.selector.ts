import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UpdateRecipeState } from '../reducers/update-recipe.reducer';


export const selectUpdateRecipeState = (state: AppState) => state.updateRecipeStates;

export const selectUpdateRecipeSuccess = createSelector(
  selectUpdateRecipeState,
  (state: UpdateRecipeState) => {
    return state.updated;
  }
);
