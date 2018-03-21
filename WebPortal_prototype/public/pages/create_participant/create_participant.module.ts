import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateParticipantPage } from './create_participant';

@NgModule({
  declarations: [
    CreateParticipantPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateParticipantPage),
  ],
})
export class CreateParticipantPageModule {}
