import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectModulePage } from './select_module';

@NgModule({
  declarations: [
    SelectModulePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectModulePage),
  ],
})
export class SelectModulePageModule {}
