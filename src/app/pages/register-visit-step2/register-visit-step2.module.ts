import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterVisitStep2PageRoutingModule } from './register-visit-step2-routing.module';

import { RegisterVisitStep2Page } from './register-visit-step2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterVisitStep2PageRoutingModule
  ],
  declarations: [RegisterVisitStep2Page]
})
export class RegisterVisitStep2PageModule {}
