import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../shared/shared.data.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  constructor(public sharedDataService: SharedDataService) {
      sharedDataService.title = 'My Modules';
      sharedDataService.bc = [
        { link: '/', title: 'Home', active: '' },
        { link: '/admin', title: 'Admin', active: '' },
        { link: '/admin/modules', title: 'Modules', active: 'active' }
      ];
  }

  ngOnInit() {

  }

}
