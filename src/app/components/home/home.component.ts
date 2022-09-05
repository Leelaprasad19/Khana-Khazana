import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:any = []

  constructor(private RecipesServiceInstance: RecipesService) { }

  storeCusine(cuisine:any){
    localStorage.setItem('cuisine',cuisine);
  }

  ngOnInit(): void {
    this.items = this.RecipesServiceInstance.getCuisines()
  }

}
