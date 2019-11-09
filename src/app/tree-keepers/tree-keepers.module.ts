import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TreeKeepersPage } from './main/tree-keepers.page';

const routes: Routes = [
  {
    path: '',
    component: TreeKeepersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TreeKeepersPage]
})
export class TreeKeepersPageModule {}
