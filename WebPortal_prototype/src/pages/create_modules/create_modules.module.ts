import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateModulesPage } from './create_modules';

@NgModule({
  declarations: [
    CreateModulesPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateModulesPage),
  ],
})
export class CreateModulesPageModule {}
