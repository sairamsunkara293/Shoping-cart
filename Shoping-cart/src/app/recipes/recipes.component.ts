import { Component, OnInit } from '@angular/core';
import { RecipieService } from './recipie.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipieService]
})
export class RecipesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
