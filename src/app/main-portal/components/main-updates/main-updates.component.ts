import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-updates',
  templateUrl: './main-updates.component.html',
  styleUrls: ['./main-updates.component.scss'],
})
export class MainUpdatesComponent implements OnInit {

  @Input() updates:any;
  constructor() { }

  ngOnInit() {}

}
