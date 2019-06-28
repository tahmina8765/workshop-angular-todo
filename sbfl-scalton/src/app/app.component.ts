import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  links = [
    {
      title: "Today",
      icon: "today",
      routerLink: ['/']
    },
    {
      title: "Important",
      icon: "grade",
      routerLink: ['/dashboard']
    },
    {
      title: "Planned",
      icon: "event",
      routerLink: ['/']
    },
    {
      title: "Tasks",
      icon: "home",
      routerLink: ['/']
    }
  ]


  constructor() {
    
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
