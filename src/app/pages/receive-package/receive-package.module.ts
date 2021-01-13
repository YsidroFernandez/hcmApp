import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceivePackagePageRoutingModule } from './receive-package-routing.module';

import { ReceivePackagePage } from './receive-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceivePackagePageRoutingModule
  ],
  declarations: [ReceivePackagePage]
})
export class ReceivePackagePageModule {}
