import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'user-popover',
  templateUrl: './user-popover.component.html',
  styleUrls: ['./user-popover.component.scss'],
})
export class UserPopoverComponent implements OnInit {

  constructor(private popoverController:PopoverController, private authService: AuthService) { 
  }

  ngOnInit() {
  }

  dismissPopover() {
    this.popoverController.dismiss(this)
  }
}
