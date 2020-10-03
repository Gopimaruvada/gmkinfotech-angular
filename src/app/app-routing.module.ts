import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy, Route} from '@angular/router';

import { Observable, timer, of } from 'rxjs';
import { NgModule } from '@angular/core';
import { flatMap } from 'rxjs/operators';
import { ContactComponent } from './gmk-modules/contact/contact.component';
import { PortfolioComponent } from './gmk-modules/portfolio/portfolio.component';
import { HowWeWorkComponent } from './gmk-modules/how-we-work/how-we-work.component';
import { HomeComponent } from './gmk-modules/home/home.component';


// const routes: Routes = [
//   { path: '', component: HomeComponent  },
//   { path: 'how-we-work', component: HowWeWorkComponent  },
//   { path: 'portfolio', component: PortfolioComponent  },
//   { path: 'Contact', component: ContactComponent  },
// ];

const Spend_ROOT_ROUTES: Routes = [

  { path: '', component: HomeComponent  },
  { path: 'how-we-work', component: HowWeWorkComponent  },
   { path: 'portfolio', component: PortfolioComponent  },
  { path: 'Contact', component: ContactComponent  },

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
    RouterModule.forRoot(Spend_ROOT_ROUTES, { useHash: true, onSameUrlNavigation: 'reload' }),
],
  exports: [RouterModule]


})


export class AppRoutingModule { }
