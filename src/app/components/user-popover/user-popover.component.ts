import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'user-popover',
  templateUrl: './user-popover.component.html',
  styleUrls: ['./user-popover.component.scss'],
})
export class UserPopoverComponent implements OnInit {

  constructor(private popoverController:PopoverController, private userService: UserService) { 
  }

  ngOnInit() {
  }

  dismissPopover() {
    this.popoverController.dismiss(this)
  }
}
