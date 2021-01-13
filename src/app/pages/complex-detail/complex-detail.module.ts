import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplexDetailPageRoutingModule } from './complex-detail-routing.module';

import { ComplexDetailPage } from './complex-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplexDetailPageRoutingModule
  ],
  declarations: [ComplexDetailPage]
})
export class ComplexDetailPageModule {}
