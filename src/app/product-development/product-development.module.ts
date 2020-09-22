import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup/setup.component';
import { ContinuosDeliveryComponent } from './continuos-delivery/continuos-delivery.component';



@NgModule({
  declarations: [SetupComponent, ContinuosDeliveryComponent],
  imports: [
    CommonModule
  ]
})
export class ProductDevelopmentModule { }
