import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './setup/setup.component';
import { ContinuosDeliveryComponent } from './continuos-delivery/continuos-delivery.component';
import { ProductdevelopmentComponent } from './product-development/product-development';
export const DEV_ROUTES: Routes = [
  {
      path: "", component: ProductdevelopmentComponent, children: [
          
         
          { path: "continous-delivery", component: ContinuosDeliveryComponent },
          { path: "setup", component: SetupComponent },    
          
      
      ]
  },
];


@NgModule({
  declarations: [SetupComponent, ContinuosDeliveryComponent , ProductdevelopmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      DEV_ROUTES
  ),
  ]
})
export class ProductDevelopmentModule { }
