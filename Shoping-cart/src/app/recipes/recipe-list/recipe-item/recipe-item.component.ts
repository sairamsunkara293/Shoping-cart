import { Component, OnInit, Input } from '@angular/core';
import { RecipieService } from '../../recipie.service';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipieService) { }

  ngOnInit(): void {
  }
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
