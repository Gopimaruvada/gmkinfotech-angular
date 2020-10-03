import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';

import { MobileAppModule } from './mobile-app/mobile-app.module';
import { HomeComponent } from './gmk-modules/home/home.component';
import { HowWeWorkComponent } from './gmk-modules/how-we-work/how-we-work.component';
import { OurServicesComponent } from './gmk-modules/our-services/our-services.component';
import { TechnologyComponent } from './gmk-modules/contact/technology/technology.component';
import { SolutionComponent } from './gmk-modules/solution/solution.component';
import { PortfolioComponent } from './gmk-modules/portfolio/portfolio.component';
import { ContactComponent } from './gmk-modules/contact/contact.component';
import { NavbarComponent } from './navbar/components/navbar.component';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    
    FooterComponent,
    HomeComponent,
    HowWeWorkComponent,
    OurServicesComponent,
    TechnologyComponent,
    SolutionComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MobileAppModule,NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NavbarComponent
]
})
export class AppModule { }
