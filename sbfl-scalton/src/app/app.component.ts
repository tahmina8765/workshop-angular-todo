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
      routerLink: ['/dashboard/today']
    },
    {
      title: "Important",
      icon: "grade",
      routerLink: ['/dashboard/important']
    },
    {
      title: "Planned",
      icon: "event",
      routerLink: ['/dashboard/planned']
    },
    {
      title: "Tasks",
      icon: "home",
      routerLink: ['/dashboard']
    }
  ]

  constructor() {
    
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
