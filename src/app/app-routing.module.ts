import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"" , redirectTo:"/career/auth" , pathMatch:"full"},
  {path:"career/auth" ,  loadChildren: () => import("./auth/auth.module").then(m=> m.AuthModule)} ,
  {path:"career/public" , loadChildren: () => import("./public/public.module").then(m=> m.PublicModule)} ,
  {path:"career/management" ,  loadChildren: () => import("./management/management.module").then(m=> m.ManagementModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
