import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddIdeaPage } from './add-idea';

@NgModule({
  declarations: [
    AddIdeaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddIdeaPage),
  ],
})
export class AddIdeaPageModule {}
