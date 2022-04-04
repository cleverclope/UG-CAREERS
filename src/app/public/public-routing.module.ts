import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { PublicContentComponent } from './public-content/public-content.component';
import { RouterModule } from '@angular/router';

const publicRoutes = [
  {
    path: "", component: PublicComponent, children: [
      {path:"" , component:PublicContentComponent},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(publicRoutes)
  ],
  exports:[
    RouterModule
  ],
})
export class PublicRoutingModule { }
