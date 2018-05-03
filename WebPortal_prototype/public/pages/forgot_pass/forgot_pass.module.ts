import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotPassPage } from './forgot_pass';

@NgModule({
  declarations: [
    ForgotPassPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotPassPage),
  ],
})
export class ForgotPassPageModule {}
