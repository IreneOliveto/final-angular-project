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
    console.log("deleting in effect")
    return this.actions$.pipe(
      ofType(deletingRecipe),
      mergeMap(action => this.recipeService.deleteRecipeById(action.id)
        .pipe(
          map(recipe => deleteRecipe({ recipe })
          )
        ),
      )
    );
  });
}
