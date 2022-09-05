import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service'

import { Subject } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  flag:any = 0;

  lengthFlag:any=0;

  searched:any = "";

  ingredients:any = '';

  indianRecipes:any = [];
  chineseRecipes:any = [];

  myRecipes:any = [];

  getIngredients(){
    this.flag = 1;
    this.lengthFlag = 0;
    this.myRecipes = [];
    this.searched = this.searched.toLowerCase();
    this.ingredients = this.searched.split(',');

    this.chineseRecipes = this.RecipesServiceInstance.getChineseRecipes();
    this.getItems(this.chineseRecipes);

    this.indianRecipes = this.RecipesServiceInstance.getIndianRecipes();
    this.getItems(this.indianRecipes);

    this.searched = '';
  }

  constructor(private RecipesServiceInstance:RecipesService) { }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  isMatched(recipeIngredients:any){
    
    recipeIngredients = recipeIngredients.split(',');
    
    var flag = 0;
    for(var i=0;i<this.ingredients.length;i++){
      flag=0;
      for(var j=0;j<recipeIngredients.length;j++){

        if(recipeIngredients[j]==this.ingredients[i]){
          flag = 1;
          console.log(recipeIngredients[j]);
          break;
        }
      }
      if(flag==0){
        return false;
      }
    }
    return true;
  }

  getItems(recipes:any){
    for(var i=0;i<recipes.length;i++){
      if(this.isMatched(recipes[i].ingredients)){
        this.myRecipes.push(recipes[i])
      }
    }

    if(this.myRecipes.length == 0){
      this.lengthFlag = 1;
    }else{
      this.lengthFlag = 0;
    }
  }

  storeRecipe(recipe:any){
    localStorage.setItem('recipe',recipe);
  }

  ngOnInit(): void {    
  }

}
