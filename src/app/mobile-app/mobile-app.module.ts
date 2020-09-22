import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { NativeIosComponent } from './native-ios/native-ios.component';
import { NativeAndroidComponent } from './native-android/native-android.component';
import { CrossPlatformComponent } from './cross-platform/cross-platform.component';
import { HybridAppsComponent } from './hybrid-apps/hybrid-apps.component';
import { PwaComponent } from './pwa/pwa.component';



@NgModule({
  declarations: [MobileAppComponent, NativeIosComponent, NativeAndroidComponent, CrossPlatformComponent, HybridAppsComponent, PwaComponent],
  imports: [
    CommonModule
  ]
})
export class MobileAppModule { }
