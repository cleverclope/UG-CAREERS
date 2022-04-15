import { PublicRoutingModule } from './public-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicContentComponent } from './public-content/public-content.component';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { RaiseIssueComponent } from './raise-issue/raise-issue.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';


@NgModule({
  declarations: [
    PublicContentComponent,
    PublicComponent,
    PublicHeaderComponent,
    PublicFooterComponent,
    ScheduleMeetingComponent,
    RaiseIssueComponent,
    CreateBlogComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
