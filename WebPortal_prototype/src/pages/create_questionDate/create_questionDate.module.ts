import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateQuestionDatePage } from './create_questionDate';

@NgModule({
  declarations: [
    CreateQuestionDatePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateQuestionDatePage),
  ],
})
export class CreateQuestionDatePageModule {}
