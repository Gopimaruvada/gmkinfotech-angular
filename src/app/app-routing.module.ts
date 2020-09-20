import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'how-we-work', component: HowWeWorkComponent  },
  { path: 'portfolio', component: PortfolioComponent  },
  { path: 'Contact', component: ContactComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})


export class AppRoutingModule { }
