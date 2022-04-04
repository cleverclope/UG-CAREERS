import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form !: FormGroup;
  constructor(private _fb : FormBuilder , private _toastrService:ToastrService , private _router:Router , private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      email: ['',  Validators.required],
      password: ['',  Validators.required],
    });
  }

  submit() {
    console.log(this.form.value)
    const loginData:{email:string , password:string} = this.form.value
      if (loginData.email==="admin@gmail.com" && loginData.password === "password"){
        this._toastrService.success(`Welcome back ${loginData.email}`)
        this._router.navigate(["../../management"] , {relativeTo:this._activatedRoute})
      }
      else if(loginData.email==="user@gmail.com" && loginData.password === "password"){
        this._toastrService.success(`Welcome back ${loginData.email}`)
        this._router.navigate(["../../public"] , {relativeTo:this._activatedRoute})
     }
      else{
        this._toastrService.warning("Invalid Email or password")
      }
   }

}
