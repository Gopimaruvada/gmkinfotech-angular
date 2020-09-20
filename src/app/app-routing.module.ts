import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'how-we-work', component: HowWeWorkComponent  },
  { path: 'portfolio', component: PortfolioComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})


export class AppRoutingModule { }
