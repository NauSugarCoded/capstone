import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateModulePage } from './create_module';

@NgModule({
  declarations: [
    CreateModulePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateModulePage),
  ],
})
export class CreateModulePageModule {}
