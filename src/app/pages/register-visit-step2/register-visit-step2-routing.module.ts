import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterVisitStep2Page } from './register-visit-step2.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterVisitStep2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterVisitStep2PageRoutingModule {}
