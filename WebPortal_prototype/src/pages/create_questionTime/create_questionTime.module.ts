import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateQuestionTimePage } from './create_questionTime';

@NgModule({
  declarations: [
    CreateQuestionTimePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateQuestionTimePage),
  ],
})
export class CreateQuestionTimePageModule {}
