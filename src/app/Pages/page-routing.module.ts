import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UTabRetiredComponent } from './u-tab-retired/u-tab-retired.component';
import { UserRetiredComponent } from './user-retired/user-retired.component';
import { UserTabledNewComponent } from './user-tabled-new/user-tabled-new.component';
import { UserTabletComponent } from './user-tablet/user-tablet.component';


const routes: Routes = [

  {
    path: '',
    children: [
      { path: 'tabletretired', component: UTabRetiredComponent },
      { path: 'userretired', component: UserRetiredComponent },
      { path: 'tablednew', component: UserTabledNewComponent },
      { path: 'usertablet', component: UserTabletComponent },
      {
        path: '**',
        redirectTo: '/home'
      },
      


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
