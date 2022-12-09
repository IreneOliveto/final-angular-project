import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { createRecipe, initCreateRecipe } from 'src/app/state/actions/create-recipe.action';
import { AppState } from 'src/app/state/app.state';
import { selectCreateRecipeSuccess } from 'src/app/state/selectors/create-recipe.selector';
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

  recipe$ = new Observable<Recipe>();

  createForm: FormGroup;
  nameInput: FormControl;
  instructionsInput: FormControl;
  caloriesInput: FormControl;
  fatInput: FormControl;
  satfatInput: FormControl;
  carbsInput: FormControl;
  fiberInput: FormControl;
  sugarInput: FormControl;
  proteinInput: FormControl;
  ingredientsInput: FormControl;
  imageInput: FormControl;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.id = '';
    this.createRecipeSuccess$ = new Observable();
    this.recipe$ = new Observable<Recipe>();

    this.nameInput = new FormControl('', [Validators.required]);
    this.instructionsInput = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]);
    this.ingredientsInput = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]);
    this.caloriesInput = new FormControl('', [Validators.required, Validators.min(0)]);
    this.carbsInput = new FormControl('', [Validators.required, Validators.min(0)]);
    this.fatInput = new FormControl('', [Validators.required, Validators.min(0)]);
    this.satfatInput = new FormControl('', [Validators.required, Validators.min(0)]);
    this.sugarInput = new FormControl('', [Validators.required, Validators.min(0)]);
    this.proteinInput = new FormControl('', [Validators.required, Validators.min(0)]);
    this.fiberInput = new FormControl('', [Validators.required, Validators.min(0)]);
    this.imageInput = new FormControl('', [Validators.required]);

    this.createForm = new FormGroup({
      name: this.nameInput,
      calories: this.caloriesInput,
      fat: this.caloriesInput,
      satfat: this.satfatInput,
      carbs: this.carbsInput,
      fiber: this.fatInput,
      sugar: this.sugarInput,
      protein: this.proteinInput,
      instructions: this.instructionsInput,
      ingredients: this.ingredientsInput,
      image: this.imageInput
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

    this.store.dispatch(initCreateRecipe());

  }

  newRecipe(formValue: any) {
    let newRecipe = {} as Recipe
    newRecipe = formValue;
    newRecipe.edit = true;
    newRecipe.ingredients = formValue.ingredients.split(`\r`)
    return newRecipe
  }

  submitForm(): void {
    this.createRecipe();
  }

  createRecipe(): void {
    this.createForm.value.ingredients = this.createForm.value.ingredients.trim().split('\n');
    this.createForm.value.edit = true;
    this.store.dispatch(createRecipe({ recipe: this.createForm.value}));

    this.createRecipeSuccess$.subscribe(success => {
      if (success) {
        alert('recipe created successfully!');
        this.router.navigate(['/recipes']);
      }
    });

  }

  goBack(): void {
    this.router.navigate(['/recipes']);
  }

}

