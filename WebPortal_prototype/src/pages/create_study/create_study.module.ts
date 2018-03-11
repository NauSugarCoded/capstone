import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateStudyPage } from './create_study';

@NgModule({
  declarations: [
    CreateStudyPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateStudyPage),
  ],
})
export class CreateStudyPageModule {}
