import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ToastrModule} from "ngx-toastr";

const sharedModules =  [
  MaterialModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  FontAwesomeModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule , ...sharedModules ,   ToastrModule.forRoot({ positionClass: 'toast-center-center',})
  ],exports:[... sharedModules , ToastrModule]
})
export class SharedModule { }
