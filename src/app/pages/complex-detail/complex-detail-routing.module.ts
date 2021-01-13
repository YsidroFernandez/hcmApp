import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplexDetailPage } from './complex-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ComplexDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplexDetailPageRoutingModule {}
