import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';
import { ContactComponent } from './page/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecipeComponent } from './page/recipe/recipe.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'recipe',
    component: RecipeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
