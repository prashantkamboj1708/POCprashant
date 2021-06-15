import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from 'src/guards/home.guard';
import { LoginguardGuard } from 'src/guards/loginguard.guard';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { PaymentComponent } from './pay/payment/payment.component';
import { ProdpageComponent } from './product/prodpage/prodpage.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent,
  }
  ,
  {
    path:'homepage',
    component:HomepageComponent
    ,canActivate:[HomeGuard]
  },
  {
    path:'products',
    component:ProdpageComponent,canActivate:[HomeGuard]
  },
  // {
  //   path:'checkout',
  //   component:CheckoutComponent
  // },
  {
   path:'cart',loadChildren:()=>import('./cart/cart.module')
   .then(mod=>mod.CartModule),canActivate:[HomeGuard]
  },
  // },{
  // path:'',loadChildren:()=>import('./cart/cart.module')
  // .then(mod=>mod.CartModule)
  // },
  // ,{
  //   path:'checkout',
  //   component:CheckoutComponent
  // },
  {
    path:'payment',
    component:PaymentComponent,canActivate:[HomeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
