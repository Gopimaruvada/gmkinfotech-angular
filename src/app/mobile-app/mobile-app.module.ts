import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { NativeIosComponent } from './native-ios/native-ios.component';
import { NativeAndroidComponent } from './native-android/native-android.component';
import { CrossPlatformComponent } from './cross-platform/cross-platform.component';
import { HybridAppsComponent } from './hybrid-apps/hybrid-apps.component';
import { PwaComponent } from './pwa/pwa.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductDevelopmentModule } from '../product-development/product-development.module';
import { DesignModule } from '../design/design.module';
import { WebDevelopmentModule } from '../web-development/web-development.module';
import { EnterpriseSolutionsComponent } from './enterprise-solutions/enterprise-solutions.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { CmsComponent } from './cms/cms.component';
import { ApiBackendComponent } from './api-backend/api-backend.component';
import { CustomDevelopmentComponent } from './custom-development/custom-development.component';
export const MOBILE_ROUTES: Routes = [
  {
      path: "", component: MobileAppComponent, children: [
          
         
          { path: "native-ios", component: NativeIosComponent },
          { path: "native-android", component: NativeAndroidComponent },
          { path: "cross-platform", component: CrossPlatformComponent },
          { path: "hybrid-apps", component: HybridAppsComponent },
          { path: "pwa", component: PwaComponent },
      
      ]
  },
];

@NgModule({
  declarations: [MobileAppComponent, NativeIosComponent, NativeAndroidComponent, CrossPlatformComponent, HybridAppsComponent, PwaComponent, EnterpriseSolutionsComponent, EcommerceComponent, CmsComponent, ApiBackendComponent, CustomDevelopmentComponent],
  imports: [
    CommonModule,ProductDevelopmentModule,DesignModule,WebDevelopmentModule,
    RouterModule.forChild(
      MOBILE_ROUTES
  ),
  ]
})
export class MobileAppModule {
  
 }
