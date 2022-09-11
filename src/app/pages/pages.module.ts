import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';

//mys components
import { MainPageComponent } from './main-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { FirstGraphComponent } from './first-graph/first-graph.component';

// component shared
import { HeaderComponent } from '../shared/header/header.component';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  declarations: [
    MainPageComponent,
    // children page
    DashboardComponent,
    ProgressComponent,
    FirstGraphComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,

    // standalone component
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
  ],
})
export class PagesModule {}
