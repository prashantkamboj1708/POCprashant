import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatBadgeModule
  ],

})
export class CartModule { }
