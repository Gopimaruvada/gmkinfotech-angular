import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WireframeComponent } from './wireframe/wireframe.component';
import { UxComponent } from './ui/ux/ux.component';
import { AnalysisComponent } from './analysis/analysis.component';



@NgModule({
  declarations: [WireframeComponent, UxComponent, AnalysisComponent],
  imports: [
    CommonModule
  ]
})
export class DesignModule { }
