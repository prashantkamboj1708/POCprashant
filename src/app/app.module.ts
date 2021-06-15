import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartRoutingModule } from './cart/cart-routing.module';
import { PayModule } from './pay/pay.module';
import { CartModule } from './cart/cart.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    HomeModule,
    ProductModule,
    BrowserAnimationsModule,
    CartRoutingModule,
    PayModule,
  
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
