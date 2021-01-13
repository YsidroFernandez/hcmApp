import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewVisitSolictudPageRoutingModule } from './new-visit-solictud-routing.module';

import { NewVisitSolictudPage } from './new-visit-solictud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewVisitSolictudPageRoutingModule
  ],
  declarations: [NewVisitSolictudPage]
})
export class NewVisitSolictudPageModule {}
