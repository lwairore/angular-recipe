import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mra-slider',
  templateUrl: './slider.component.html',
  styles: [
  ]
})
export class SliderComponent implements OnInit {
  @Input() sliderImages: Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
