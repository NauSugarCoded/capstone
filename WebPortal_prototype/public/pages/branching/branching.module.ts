import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BranchingPage } from './branching';

@NgModule({
  declarations: [
    BranchingPage,
  ],
  imports: [
    IonicPageModule.forChild(BranchingPage),
  ],
})
export class BranchingPageModule {}
