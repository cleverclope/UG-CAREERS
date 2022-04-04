import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { ManagementRoutingModule } from './management-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementHeaderComponent } from './management-header/management-header.component';
import { ManagementFooterComponent } from './management-footer/management-footer.component';
import { ManagementContentComponent } from './management-content/management-content.component';


@NgModule({
  declarations: [
    ManagementComponent,
    DashboardComponent,
    ManagementHeaderComponent,
    ManagementFooterComponent,
    ManagementContentComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    SharedModule
  ]
})
export class ManagementModule { }
