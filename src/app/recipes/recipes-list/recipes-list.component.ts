import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import {Recipes} from '../recipes.model'
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes: Recipes[] = [
    new Recipes('A Test Recipe', 'This is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipes('A Test Recipe', 'This is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipes) {
    this.recipeWasSelected.emit(recipe)
  }

}
