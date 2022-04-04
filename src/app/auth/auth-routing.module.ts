import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

const authRoutes = [
  { path: "", component: AuthenticationComponent, children: [
  { path:"" , redirectTo:"login" , pathMatch:"full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },]
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
