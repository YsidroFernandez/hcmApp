import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterVisitStep1PageRoutingModule } from './register-visit-step1-routing.module';

import { RegisterVisitStep1Page } from './register-visit-step1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterVisitStep1PageRoutingModule
  ],
  declarations: [RegisterVisitStep1Page]
})
export class RegisterVisitStep1PageModule {}
