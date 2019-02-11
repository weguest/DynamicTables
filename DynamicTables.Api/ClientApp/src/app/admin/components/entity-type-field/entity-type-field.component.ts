import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared/services/shared.data.service';

@Component({
  selector: 'app-entity-type-field',
  templateUrl: './entity-type-field.component.html',
  styleUrls: ['./entity-type-field.component.css']
})
export class EntityTypeFieldComponent implements OnInit {

  constructor(public sharedDataService: SharedDataService) {
    sharedDataService.title = 'My Fields';
    sharedDataService.bc = [
      { link: '/', title: 'Home', active: '' },
      { link: '/admin', title: 'Admin', active: '' },
      { link: '/admin/entitytypefield', title: 'Fields', active: 'active' }
    ];
  }

  ngOnInit() {
  }

}
