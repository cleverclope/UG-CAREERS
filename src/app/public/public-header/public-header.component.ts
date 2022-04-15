import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateBlogComponent } from '../create-blog/create-blog.component';
import { RaiseIssueComponent } from '../raise-issue/raise-issue.component';
import { ScheduleMeetingComponent } from '../schedule-meeting/schedule-meeting.component';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.css']
})
export class PublicHeaderComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  scheduleMeeting(){
    this._dialog.open(ScheduleMeetingComponent, {
      width:"30%",
      height:"30%",
      disableClose:true,
    })
  }

  raiseIssue(){
    this._dialog.open(RaiseIssueComponent, {
      width:"30%",
      height:"30%",
      disableClose:true,
     })
  }

  createBlog(){
    this._dialog.open(CreateBlogComponent, {
      width:"30%",
      height:"35%",
      disableClose:true,
      })
  }



}
