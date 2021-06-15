import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdpageComponent } from './prodpage/prodpage.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProdpageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatBadgeModule,
    MatSelectModule,
    FormsModule
  ],
  exports:[
    ProdpageComponent
  ]
})
export class ProductModule { }
