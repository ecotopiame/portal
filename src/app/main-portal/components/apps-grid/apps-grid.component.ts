import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apps-grid',
  templateUrl: './apps-grid.component.html',
  styleUrls: ['./apps-grid.component.scss'],
})
export class AppsGridComponent implements OnInit {

  apps:any;
  constructor() { 
  }

  ngOnInit() {
    this.apps = [
      {
        app: 'tree-keepers',
        title: 'שומרי העצים',
        logo: 'tree-keepers.jpg',
        route: 'tree-keepers'
      },
      {
        app: 'planting-events',
        title: 'אירועי נטיעות',
        logo: 'planting-logo.jpg',
        route: 'planting-events'
      },
      {
        app: 'tidings',
        title: 'בשורות',
        logo: 'tidings.jpg',
        route: 'tidings'
      },
      {
        app: 'forestore',
        title: 'חנות היער',
        logo: 'forestore.jpg',
        route: 'forestore'
      },
      {
        app: 'courses',
        title: 'כיתת היער',
        logo: 'courses.jpg',
        route: 'courses'
      },
    ];
  }

}
