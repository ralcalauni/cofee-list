import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafesRoutingModule } from './cafes-routing.module';
import { CafeListComponent } from './cafe-list/cafe-list.component';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
  declarations: [
    CafeListComponent,
    ContadorComponent
  ],
  imports: [
    CommonModule,
    CafesRoutingModule
  ]
})
export class CafesModule { }
