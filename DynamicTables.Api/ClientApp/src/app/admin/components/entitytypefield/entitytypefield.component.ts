import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared/services/shared.data.service';

@Component({
  selector: 'app-entitytypefield',
  templateUrl: './entitytypefield.component.html',
  styleUrls: ['./entitytypefield.component.css']
})
export class EntitytypefieldComponent implements OnInit {

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
