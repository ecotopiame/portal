import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPage } from './main-page/main.page';
import { AppsGridComponent } from './components/apps-grid/apps-grid.component';
import { MainUpdatesComponent } from './components/main-updates/main-updates.component';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainPage, AppsGridComponent, MainUpdatesComponent]
})
export class MainPageModule {}
