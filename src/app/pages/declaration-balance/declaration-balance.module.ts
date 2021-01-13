import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeclarationBalancePageRoutingModule } from './declaration-balance-routing.module';

import { DeclarationBalancePage } from './declaration-balance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeclarationBalancePageRoutingModule
  ],
  declarations: [DeclarationBalancePage]
})
export class DeclarationBalancePageModule {}
