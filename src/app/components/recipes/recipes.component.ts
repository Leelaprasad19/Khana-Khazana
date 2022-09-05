import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service'

import { Subject } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  chineseRecipes:any = []
  indianRecipes:any = []

  constructor(private RecipesServiceInstance: RecipesService) { }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  storeRecipe(recipe:any){
    localStorage.setItem('recipe',recipe);
  }

  ngOnInit(): void {

    this.chineseRecipes = this.RecipesServiceInstance.getChineseRecipes();
    
    localStorage.setItem('chinese',this.chineseRecipes);

    this.indianRecipes = this.RecipesServiceInstance.getIndianRecipes();
    
    localStorage.setItem('indian',this.indianRecipes);

    console.log(this.chineseRecipes)
    console.log(this.indianRecipes)
    
  }

  

}
