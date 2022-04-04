import { PublicRoutingModule } from './public-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicContentComponent } from './public-content/public-content.component';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';


@NgModule({
  declarations: [
    PublicContentComponent,
    PublicComponent,
    PublicHeaderComponent,
    PublicFooterComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
