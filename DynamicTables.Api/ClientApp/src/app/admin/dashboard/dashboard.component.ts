import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared/shared.data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public sharedDataService: SharedDataService) {
    sharedDataService.title = 'Dashboard';
    sharedDataService.bc = [
      { link: '/', title: 'Home', active: '' },
      { link: '/admin', title: 'Admin', active: 'active' }
    ];
  }

  ngOnInit() {
  }

}
