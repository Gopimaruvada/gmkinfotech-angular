import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy, Route} from '@angular/router';

import { Observable, timer, of } from 'rxjs';
import { NgModule } from '@angular/core';
import { flatMap } from 'rxjs/operators';
import { ContactComponent } from './gmk-modules/contact/contact.component';
import { PortfolioComponent } from './gmk-modules/portfolio/portfolio.component';
import { HowWeWorkComponent } from './gmk-modules/how-we-work/how-we-work.component';
import { HomeComponent } from './gmk-modules/home/home.component';


import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TechnologyComponent } from './gmk-modules/technology/technology.component';




// const routes: Routes = [
//   { path: '', component: HomeComponent  },
//   { path: 'how-we-work', component: HowWeWorkComponent  },
//   { path: 'portfolio', component: PortfolioComponent  },
//   { path: 'Contact', component: ContactComponent  },
// ];

const ROOT_ROUTES: Routes = [

  { path: '', component: HomeComponent  },
  { path: 'Home', component: HomeComponent  },
  { path: 'how-we-work', component: HowWeWorkComponent  },
   { path: 'portfolio', component: PortfolioComponent  },
   { path: 'technology', component: TechnologyComponent  },

  { path: 'Contact', component: ContactComponent  },

  { path: 'Terms', component: TermsandconditionsComponent  },

  { path: 'privacy', component: PrivacypolicyComponent  },
   {
       path: 'mobile-app',
       loadChildren: () => import('./mobile-app/mobile-app.module').then(m => m.MobileAppModule), data: { preload: true, delay: false },
   },

   {
       path: 'design',
       loadChildren: () => import('./design/design.module').then(m => m.DesignModule), data: { preload: true, delay: false },
   },
     
  {
      path: 'product-development',
      loadChildren: () => import('./product-development/product-development.module').then(m => m.ProductDevelopmentModule), data: { preload: true, delay: true },    
  }, 
  {
    path: 'web-development',
    loadChildren: () => import('./web-development/web-development.module').then(m => m.WebDevelopmentModule), data: { preload: true, delay: true },    
}, 

 
  {
      path: '**',
      redirectTo: 'not-found' // can be 404 not found page
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(ROOT_ROUTES, {onSameUrlNavigation: 'reload' ,scrollPositionRestoration:'top'}),
],
  exports: [RouterModule]


})


export class AppRoutingModule { }
