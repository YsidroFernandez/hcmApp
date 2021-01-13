import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'complex',
    loadChildren: () => import('./pages/complex/complex.module').then( m => m.ComplexPageModule)
  },
  {
    path: 'complex-detail',
    loadChildren: () => import('./pages/complex-detail/complex-detail.module').then( m => m.ComplexDetailPageModule)
  },
  {
    path: 'receive-package',
    loadChildren: () => import('./pages/receive-package/receive-package.module').then( m => m.ReceivePackagePageModule)
  },
  {
    path: 'receive-detail',
    loadChildren: () => import('./pages/receive-detail/receive-detail.module').then( m => m.ReceiveDetailPageModule)
  },
  {
    path: 'deliver-package',
    loadChildren: () => import('./pages/deliver-package/deliver-package.module').then( m => m.DeliverPackagePageModule)
  },
  {
    path: 'validate-package',
    loadChildren: () => import('./pages/validate-package/validate-package.module').then( m => m.ValidatePackagePageModule)
  },
  {
    path: 'register-visit',
    loadChildren: () => import('./pages/register-visit/register-visit.module').then( m => m.RegisterVisitPageModule)
  },
  {
    path: 'register-visit-step1',
    loadChildren: () => import('./pages/register-visit-step1/register-visit-step1.module').then( m => m.RegisterVisitStep1PageModule)
  },
  {
    path: 'register-visit-step2',
    loadChildren: () => import('./pages/register-visit-step2/register-visit-step2.module').then( m => m.RegisterVisitStep2PageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'checkout-confirm',
    loadChildren: () => import('./pages/checkout-confirm/checkout-confirm.module').then( m => m.CheckoutConfirmPageModule)
  },
  {
    path: 'new-visit',
    loadChildren: () => import('./pages/new-visit/new-visit.module').then( m => m.NewVisitPageModule)
  },
  {
    path: 'new-visit-solictud',
    loadChildren: () => import('./pages/new-visit-solictud/new-visit-solictud.module').then( m => m.NewVisitSolictudPageModule)
  },
  {
    path: 'check-balance',
    loadChildren: () => import('./pages/check-balance/check-balance.module').then( m => m.CheckBalancePageModule)
  },
  {
    path: 'incidencia',
    loadChildren: () => import('./pages/incidencia/incidencia.module').then( m => m.IncidenciaPageModule)
  },
  {
    path: 'declaration-balance',
    loadChildren: () => import('./pages/declaration-balance/declaration-balance.module').then( m => m.DeclarationBalancePageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./pages/information/information.module').then( m => m.InformationPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
