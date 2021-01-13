import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterVisitStep1Page } from './register-visit-step1.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterVisitStep1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterVisitStep1PageRoutingModule {}
