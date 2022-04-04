import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"" , redirectTo:"/career/auth" , pathMatch:"full"},
  {path:"career/auth" ,  loadChildren: () => import("./auth/auth.module").then(m=> m.AuthModule)} ,
  {path:"career/account" , loadChildren: () => import("./account/account.module").then(m=> m.AccountModule)} ,
  {path:"career/management" ,  loadChildren: () => import("./management/management.module").then(m=> m.ManagementModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
