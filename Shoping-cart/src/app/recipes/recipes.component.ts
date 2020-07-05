import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { RecipieService } from './recipie.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipieService]
})
export class RecipesComponent implements OnInit {
  selectedrecipe: Recipe;
  constructor(private recipeService: RecipieService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedrecipe = recipe;
    })
  }

}
