import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './page-routing.module';
import { UTabRetiredComponent } from './u-tab-retired/u-tab-retired.component';
import { UserRetiredComponent } from './user-retired/user-retired.component';
import { UserTabledNewComponent } from './user-tabled-new/user-tabled-new.component';
import { UserTabletComponent } from './user-tablet/user-tablet.component';



@NgModule({
  declarations: [
   
    UserRetiredComponent,
    UserTabletComponent,
    UserTabledNewComponent,
    UTabRetiredComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
