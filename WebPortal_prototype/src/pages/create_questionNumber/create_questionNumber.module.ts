import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateQuestionNumberPage } from './create_questionNumber';

@NgModule({
  declarations: [
    CreateQuestionNumberPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateQuestionNumberPage),
  ],
})
export class CreateQuestionNumberPageModule {}
