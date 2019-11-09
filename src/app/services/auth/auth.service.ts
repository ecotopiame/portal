import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, private navController: NavController) { }

  
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(()=>{
      this.navController.navigateRoot(['']);
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(()=>{
      this.navController.navigateRoot(['login'])
    });

  }
}
