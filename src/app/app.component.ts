import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  displayNetworkStatus(): void {
    if (navigator.onLine){
      document.querySelector('body').style.filter = ``;
    } else {
      document.querySelector('body').style.filter = 'grayscale(1)';
    }
  }

  ngOnInit(): void {
    this.displayNetworkStatus();
    window.addEventListener('online', this.displayNetworkStatus);
    window.addEventListener('offline', this.displayNetworkStatus);
  }
  
}
