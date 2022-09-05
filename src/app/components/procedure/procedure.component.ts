import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service'

import { Subject } from 'rxjs';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {

  recipe:any = '';
  chineseRecipes:any = []
  indianRecipes:any = []

  path = 'assets/Images/Procedure/chinese/dimsim.png'

  constructor(private RecipesServiceInstance: RecipesService) { }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  retrieveRecipeName(){
    this.recipe = localStorage.getItem('recipe')
  }

  ngOnInit(): void {

    this.retrieveRecipeName();


    this.chineseRecipes = this.RecipesServiceInstance.getChineseRecipes();

        for(var i=0;i<this.chineseRecipes.length;i++){

          if(this.recipe==this.chineseRecipes[i].name){

            this.path = this.chineseRecipes[i].procedure_
            break

          }

        }

        this.indianRecipes = this.RecipesServiceInstance.getIndianRecipes();

        for(var i=0;i<this.indianRecipes.length;i++){
            if(this.recipe==this.indianRecipes[i].name){
              this.path = this.indianRecipes[i].procedure_
              break

            }
        }
  }


}
