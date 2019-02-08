import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared/shared.data.service';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {

  constructor(public sharedDataService: SharedDataService) {
    sharedDataService.title = 'Groups';
    sharedDataService.bc = [
      { link: '/', title: 'Home', active: '' },
      { link: '/admin', title: 'Admin', active: '' },
      { link: '/admin/groups', title: 'Groups', active: 'active' }
    ];
  }

  ngOnInit() {
  }

}
