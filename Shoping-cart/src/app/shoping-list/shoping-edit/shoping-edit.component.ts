import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ShopingListService } from '../shoping-list.service'
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  @ViewChild('inputName') nameInputRef: ElementRef;
  @ViewChild('inputAmount') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShopingListService) { }

  ngOnInit(): void {
  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount)
    this.shoppingListService.addIngredient(newIngredient);
  }
}
