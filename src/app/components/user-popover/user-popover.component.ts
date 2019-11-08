import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'user-popover',
  templateUrl: './user-popover.component.html',
  styleUrls: ['./user-popover.component.scss'],
})
export class UserPopoverComponent implements OnInit {

  constructor(private popoverController:PopoverController) { }

  ngOnInit() {}

  dismissPopover() {
    this.popoverController.dismiss(this)
  }
}
