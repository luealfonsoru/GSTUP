import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrgInfoPage } from './org-info';

@NgModule({
  declarations: [
    OrgInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(OrgInfoPage),
  ],
})
export class OrgInfoPageModule {}
