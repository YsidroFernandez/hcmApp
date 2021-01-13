import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidatePackagePage } from './validate-package.page';

const routes: Routes = [
  {
    path: '',
    component: ValidatePackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidatePackagePageRoutingModule {}
