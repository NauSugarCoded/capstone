import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateQuestionRadioPage } from './create_questionRadio';

@NgModule({
  declarations: [
    CreateQuestionRadioPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateQuestionRadioPage),
  ],
})
export class CreateQuestionRadioPageModule {}
