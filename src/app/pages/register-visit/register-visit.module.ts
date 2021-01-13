import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterVisitPageRoutingModule } from './register-visit-routing.module';

import { RegisterVisitPage } from './register-visit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterVisitPageRoutingModule
  ],
  declarations: [RegisterVisitPage]
})
export class RegisterVisitPageModule {}
