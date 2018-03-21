import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectStudyPage } from './select_study';

@NgModule({
  declarations: [
    SelectStudyPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectStudyPage),
  ],
})
export class SelectStudyPageModule {}
