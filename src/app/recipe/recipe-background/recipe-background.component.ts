import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mra-recipe-background',
  templateUrl: './recipe-background.component.html',
  styles: [
  ]
})
export class RecipeBackgroundComponent implements OnInit {
  @Input() coverImage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
