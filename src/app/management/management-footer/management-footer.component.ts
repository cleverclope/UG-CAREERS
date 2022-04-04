import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-footer',
  templateUrl: './management-footer.component.html',
  styleUrls: ['./management-footer.component.css']
})
export class ManagementFooterComponent implements OnInit {
  currentYear = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
