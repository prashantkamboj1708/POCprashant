import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from '../product/product.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatBadgeModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  
    
  ]
  ,
  exports:[HomepageComponent]
})
export class HomeModule { }
