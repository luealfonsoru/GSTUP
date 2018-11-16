import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddOrgPage } from './add-org';

@NgModule({
  declarations: [
    AddOrgPage,
  ],
  imports: [
    IonicPageModule.forChild(AddOrgPage),
  ],
})
export class AddOrgPageModule {}
