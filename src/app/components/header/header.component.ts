import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { UserPopoverComponent } from 'src/app/components/user-popover/user-popover.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() user:any;
  constructor(private popoverController:PopoverController) { }

  ngOnInit() {}
  
  async presentUserPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: UserPopoverComponent,
      event: ev,
      translucent: true,
      animated: true,
      showBackdrop: true,
      componentProps: {
        'user': this.user
      },
      cssClass: 'user-popover'
    });
    return await popover.present();
}
}
