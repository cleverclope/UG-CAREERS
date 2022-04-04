import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes =[ {
    path: "", component:ManagementComponent, children: [
      {path: "", redirectTo: "Dashboard", pathMatch:"full"},
      {path: "Dashboard", component: DashboardComponent}

    ]  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ManagementRoutingModule { }
