import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateQuestionSliderPage } from './create_questionSlider';

@NgModule({
  declarations: [
    CreateQuestionSliderPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateQuestionSliderPage),
  ],
})
export class CreateQuestionSliderPageModule {}
