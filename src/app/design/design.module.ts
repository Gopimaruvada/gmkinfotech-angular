import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WireframeComponent } from './wireframe/wireframe.component';
import { UxComponent } from './ui/ux/ux.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { DesignComponent } from './design/design.component';
import { Routes, RouterModule } from '@angular/router';
export const DESIGN_ROUTES: Routes = [
  {
      path: "", component: DesignComponent, children: [
          
         
          { path: "wireframe", component: WireframeComponent },
          { path: "ui", component: UxComponent },
          { path: "analysis", component: AnalysisComponent },
          
      
      ]
  },
];


@NgModule({
  declarations: [WireframeComponent, UxComponent, AnalysisComponent, DesignComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      DESIGN_ROUTES
  ),
  ]
})
export class DesignModule { }
