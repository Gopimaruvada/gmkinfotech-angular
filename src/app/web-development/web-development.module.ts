import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseSolutionsComponent } from './enterprise-solutions/enterprise-solutions.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { CmsComponent } from './cms/cms.component';
import { ApiBackendComponent } from './api-backend/api-backend.component';
import { CustomDevelopmentComponent } from './custom-development/custom-development.component';



@NgModule({
  declarations: [EnterpriseSolutionsComponent, EcommerceComponent, CmsComponent, ApiBackendComponent, CustomDevelopmentComponent],
  imports: [
    CommonModule
  ]
})
export class WebDevelopmentModule { }
