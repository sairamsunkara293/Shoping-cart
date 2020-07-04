import { Component } from '@angular/core';
import { Recipe } from './recipes/recipe-list/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shoping-cart';
  Loadedfeature: string = 'recipe';
  onNavigate(feature: string) {
    this.Loadedfeature = feature;
  }
}
