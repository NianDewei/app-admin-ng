import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';

//mys components
import { MainPageComponent } from './main-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { FirstGraphComponent } from './first-graph/first-graph.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DashboardComponent,
    ProgressComponent,
    FirstGraphComponent,
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
