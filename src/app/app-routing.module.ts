import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainPage } from './main-portal/main-page/main.page';

const routes: Routes = [
    { path: '', loadChildren: './main-portal/main.module#MainPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
