import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component'
import { RecipesComponent } from './components/recipes/recipes.component'
import { RecipeComponent } from './components/recipe/recipe.component';
import { ErrorComponent } from './components/error/error.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ProcedureComponent } from './components/procedure/procedure.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'search', component: SearchbarComponent},
  {path: 'procedure', component: ProcedureComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
