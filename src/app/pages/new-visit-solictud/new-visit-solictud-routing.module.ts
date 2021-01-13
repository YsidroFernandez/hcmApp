import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewVisitSolictudPage } from './new-visit-solictud.page';

const routes: Routes = [
  {
    path: '',
    component: NewVisitSolictudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewVisitSolictudPageRoutingModule {}
