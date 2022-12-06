// create-apartment.component.ts

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { createRecipe, initCreateRecipe } from 'src/app/state/actions/create-recipe.action';
import { updatingRecipe } from 'src/app/state/actions/update-recipe.action';
import { AppState } from 'src/app/state/app.state';
import { selectCreateRecipeSuccess } from 'src/app/state/selectors/create-recipe.selector';
import { selectUpdateRecipeSuccess } from 'src/app/state/selectors/update-recipe.selector';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { selectRecipes } from 'src/app/state/selectors/recipes.selector';
import { loadingRecipe } from 'src/app/state/actions/recipe-details.action';
import { selectRecipe } from 'src/app/state/selectors/recipe-details.selector';


@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  id: string;
  createRecipeSuccess$: Observable<boolean>;
  updateRecipeSuccess$: Observable<boolean>;

  recipe$ = new Observable<Recipe>();


  createForm: FormGroup;
  nameInput: FormControl;
  instructionsInput: FormControl;
  // descriptionInput: FormControl;
  // imgInput: FormControl;



  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.id = '';
    this.createRecipeSuccess$ = new Observable();
    this.updateRecipeSuccess$ = new Observable();
    this.recipe$ = new Observable<Recipe>();

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
    this.id = this.route.snapshot.params['id'];
    if(this.id !== undefined) {
      console.log("update")
      this.recipe$ = this.store.select(selectRecipe);
      this.store.dispatch(loadingRecipe({ id: this.id }));
    }

    this.createRecipeSuccess$ = this.store.select(selectCreateRecipeSuccess);
    this.updateRecipeSuccess$ = this.store.select(selectUpdateRecipeSuccess);

    this.store.dispatch(initCreateRecipe());

  }

  newRecipe(formValue: any) {
    let newRecipe = {} as Recipe
    newRecipe = formValue
    newRecipe.edit = true;
    return newRecipe
  }

  submitForm(): void {
    if(this.id !== undefined){
      this.updateRecipe();
    }else {
      this.createRecipe();
    }
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

  updateRecipe(): void {
    this.store.dispatch(updatingRecipe({ recipe: this.newRecipe(this.createForm.value)}));

    this.updateRecipeSuccess$.subscribe(success => {
      if (success) {
        alert('recipe updated successfully!');
        this.router.navigate(['/']);
      } else {
        console.log('fail update');
      }
    });
  }

}

