import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared/services/shared.data.service';

@Component({
  selector: 'app-global-config',
  templateUrl: './global-config.component.html',
  styleUrls: ['./global-config.component.css']
})
export class GlobalConfigComponent implements OnInit {

  constructor(public sharedDataService: SharedDataService) {
    sharedDataService.title = 'My Configs';
    sharedDataService.bc = [
      { link: '/', title: 'Home', active: '' },
      { link: '/admin', title: 'Admin', active: '' },
      { link: '/admin/global', title: 'Global', active: 'active' }
    ];
  }


  ngOnInit() {
  }

}
