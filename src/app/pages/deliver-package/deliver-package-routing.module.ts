import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliverPackagePage } from './deliver-package.page';

const routes: Routes = [
  {
    path: '',
    component: DeliverPackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliverPackagePageRoutingModule {}
