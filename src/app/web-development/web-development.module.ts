import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseSolutionsComponent } from './enterprise-solutions/enterprise-solutions.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { CmsComponent } from './cms/cms.component';
import { ApiBackendComponent } from './api-backend/api-backend.component';
import { CustomDevelopmentComponent } from './custom-development/custom-development.component';
import { Routes, RouterModule } from '@angular/router';
import { WebdevelopmentIndex } from './web-development-index';
export const WEB_ROUTES: Routes = [
  {
      path: "", component: WebdevelopmentIndex, children: [
          
         
          { path: "enterprise-solutions", component: EnterpriseSolutionsComponent },
          { path: "ecommerce", component: EcommerceComponent },
          { path: "cms", component: CmsComponent },
          { path: "api-backend", component: ApiBackendComponent },
          { path: "custom-development", component: CustomDevelopmentComponent },
      
      ]
  },
];

@NgModule({
  declarations: [EnterpriseSolutionsComponent, EcommerceComponent, CmsComponent, ApiBackendComponent, CustomDevelopmentComponent, WebdevelopmentIndex],
  imports: [
    CommonModule,
    RouterModule.forChild(
      WEB_ROUTES
  ),
  ]
})
export class WebDevelopmentModule { }
