import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';

// Constant
import { appPath } from '../app-path.const';

const routes: Routes = [
  {
    path: '',
    component: CartComponent
  },
  {
    path: appPath.checkout,
    loadChildren: './checkout/checkout.module#CheckoutModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
