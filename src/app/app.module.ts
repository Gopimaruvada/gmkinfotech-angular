import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';

import { MobileAppModule } from './mobile-app/mobile-app.module';
import { HomeComponent } from './gmk-modules/home/home.component';
import { HowWeWorkComponent } from './gmk-modules/how-we-work/how-we-work.component';
import { OurServicesComponent } from './gmk-modules/our-services/our-services.component';

import { SolutionComponent } from './gmk-modules/solution/solution.component';
import { PortfolioComponent } from './gmk-modules/portfolio/portfolio.component';
import { ContactComponent } from './gmk-modules/contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TechnologyComponent } from './gmk-modules/technology/technology.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HowWeWorkComponent,
    OurServicesComponent,
    TechnologyComponent,
    SolutionComponent,
    PortfolioComponent,
    ContactComponent,
    TermsandconditionsComponent,
    PrivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MobileAppModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    
]
})
export class AppModule { }
