import { SharedDataService } from './../../../shared/services/shared.data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entitytype',
  templateUrl: './entitytype.component.html',
  styleUrls: ['./entitytype.component.css']
})
export class EntitytypeComponent implements OnInit {

  constructor(public sharedDataService: SharedDataService) {
    sharedDataService.title = 'My Entities';
    sharedDataService.bc = [
      { link: '/', title: 'Home', active: '' },
      { link: '/admin', title: 'Admin', active: '' },
      { link: '/admin/entitytype', title: 'Entities', active: 'active' }
    ];
  }

  ngOnInit() {
  }

}
