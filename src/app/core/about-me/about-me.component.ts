import { Component, OnInit } from '@angular/core';
import { AboutMe } from '../about-me';

@Component({
  selector: 'mra-about-me',
  templateUrl: './about-me.component.html',
  styles: [
  ]
})
export class AboutMeComponent implements OnInit {
  myAbout: AboutMe;

  constructor() {
    this.myAbout = new AboutMe(
      'Lucas',
      'Karangu',
      'kwairore@gmail.com',
      "I'm Lucas and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.",
      'https://lh3.googleusercontent.com/ogw/ADGmqu-hYa6HHxvzxXyf1QUqiXAs53-OQqGahB9vjlkt=s83-c-mo'
    )
  }

  ngOnInit(): void {
  }

}
