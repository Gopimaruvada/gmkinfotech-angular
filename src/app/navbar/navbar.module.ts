import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileAppModule } from '../mobile-app/mobile-app.module';
import { NavbarComponent } from './components/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule, 
    MobileAppModule
  ],
  exports: [
    NavbarComponent
]
})
export class NavbarModule { }
