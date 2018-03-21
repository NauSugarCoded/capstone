import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateQuestionPage } from './create_question';

@NgModule({
  declarations: [
    CreateQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateQuestionPage),
  ],
})
export class CreateQuestionPageModule {}
