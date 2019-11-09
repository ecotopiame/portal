import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { UserPopoverComponent } from 'src/app/components/user-popover/user-popover.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  user:any;
  constructor(private popoverController:PopoverController,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute) {
      this.afAuth.user.subscribe((data)=> {
        this.user = data;
      })
    }

  ngOnInit() {
  }
  
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
