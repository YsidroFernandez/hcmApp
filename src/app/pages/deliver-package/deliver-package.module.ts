import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliverPackagePageRoutingModule } from './deliver-package-routing.module';

import { DeliverPackagePage } from './deliver-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliverPackagePageRoutingModule
  ],
  declarations: [DeliverPackagePage]
})
export class DeliverPackagePageModule {}
