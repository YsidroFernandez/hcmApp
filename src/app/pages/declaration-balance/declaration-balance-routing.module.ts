import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclarationBalancePage } from './declaration-balance.page';

const routes: Routes = [
  {
    path: '',
    component: DeclarationBalancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeclarationBalancePageRoutingModule {}
