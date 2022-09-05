import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service'

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  cuisine:any = ''
  recipes:any = []

  chineseRecipes:any = []
  indianRecipes:any = []

  constructor(private RecipesServiceInstance: RecipesService) { }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  retrieveCuisineName(){
    this.cuisine = localStorage.getItem('cuisine')
  }


  storeRecipe(recipe:any){
    localStorage.setItem('recipe',recipe);
  }

  ngOnInit(): void {


    this.retrieveCuisineName()


    if(this.cuisine=='Chinese'){

      this.chineseRecipes = this.RecipesServiceInstance.getChineseRecipesRankWise();
      this.recipes = this.chineseRecipes;

    }else{

      this.indianRecipes = this.RecipesServiceInstance.getIndianRecipesRankWise();
      this.recipes = this.indianRecipes;

    }
    

  }

}
