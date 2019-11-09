import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  updates: Observable<any>
  constructor(db: AngularFirestore) { 
    this.updates = db.collection('app-news-updates').valueChanges();
  }

  ngOnInit() {
  }

}
