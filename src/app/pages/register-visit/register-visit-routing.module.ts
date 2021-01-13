import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterVisitPage } from './register-visit.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterVisitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterVisitPageRoutingModule {}
