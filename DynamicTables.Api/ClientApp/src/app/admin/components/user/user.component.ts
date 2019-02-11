import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared/services/shared.data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public sharedDataService: SharedDataService) {
    sharedDataService.title = 'Users';
    sharedDataService.bc = [
      { link: '/', title: 'Home', active: '' },
      { link: '/admin', title: 'Admin', active: '' },
      { link: '/admin/users', title: 'Users', active: 'active' }
    ];
  }

  ngOnInit() {
  }

}
