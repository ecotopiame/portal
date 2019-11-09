import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(()=>{
      this.router.navigate(['']);
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(()=>{
      this.router.navigate(['login'])
    });

  }
}
