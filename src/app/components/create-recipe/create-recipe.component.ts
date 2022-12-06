// create-apartment.component.ts

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { createRecipe, initCreateRecipe } from 'src/app/state/actions/create-recipe.action';
import { AppState } from 'src/app/state/app.state';
import { selectCreateRecipeSuccess } from 'src/app/state/selectors/create-recipe.selector';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { selectRecipes } from 'src/app/state/selectors/recipes.selector';


@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  createRecipeSuccess$: Observable<boolean>;

  createForm: FormGroup;
  nameInput: FormControl;
  instructionsInput: FormControl;
  // descriptionInput: FormControl;
  // imgInput: FormControl;



  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.createRecipeSuccess$ = new Observable();

    this.nameInput = new FormControl('', [Validators.required]);
    this.instructionsInput = new FormControl('', [Validators.required]);
    // this.imgInput = new FormControl('', [Validators.required]);
    this.createForm = new FormGroup({

      name: this.nameInput,
      instructions: this.instructionsInput,
      // img: this.imgInput
    });

  }

  ngOnInit(): void {
    this.createRecipeSuccess$ = this.store.select(selectCreateRecipeSuccess);

    this.store.dispatch(initCreateRecipe());

  }

  newRecipe(formValue: any) {
    let newRecipe = {} as Recipe
    newRecipe = formValue
    newRecipe.edit = true;
    return newRecipe
  }

  createRecipe(): void {

    this.store.dispatch(createRecipe({ recipe: this.newRecipe(this.createForm.value)}));

    this.createRecipeSuccess$.subscribe(success => {
      if (success) {
        alert('recipe created successfully!');
        this.router.navigate(['/']);
      } else {
        console.log('fail');
      }
    });

  }

}

