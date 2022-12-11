// state/effects/delete-recipe.effect.ts

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { RecipeService } from "src/app/service/recipe.service";
import { deleteRecipe, deletingRecipe } from "../actions/delete-recipe.action";

@Injectable()
export class DeleteRecipeEffects {
  constructor(
    private actions$: Actions,
    private recipeService: RecipeService
  ) {}

  deletingRecipe$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletingRecipe),
      mergeMap(action => this.recipeService.deleteRecipeById(action.id) // Delete the recipe
        .pipe(
          map(recipe => deleteRecipe({ recipe })  // dispatch the deleteRecipe action
          )
        ),
      )
    );
  });
}
