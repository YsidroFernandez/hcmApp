import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidatePackagePageRoutingModule } from './validate-package-routing.module';

import { ValidatePackagePage } from './validate-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidatePackagePageRoutingModule
  ],
  declarations: [ValidatePackagePage]
})
export class ValidatePackagePageModule {}
