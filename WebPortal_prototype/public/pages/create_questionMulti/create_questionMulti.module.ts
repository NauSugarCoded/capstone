import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateQuestionMultiPage } from './create_questionMulti';

@NgModule({
  declarations: [
    CreateQuestionMultiPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateQuestionMultiPage),
  ],
})
export class CreateQuestionMultiPageModule {}
