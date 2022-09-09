import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page.component';
import { ProgressComponent } from './progress/progress.component';
import { FirstGraphComponent } from './first-graph/first-graph.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainPageComponent, // core of all pages
    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'first-graph', component: FirstGraphComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
