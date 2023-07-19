import { Component } from '@angular/core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  selectedPage:number = 0;
  constructor() { }

  onClick(selected:number) {
    this.selectedPage = selected;
  } 
}
