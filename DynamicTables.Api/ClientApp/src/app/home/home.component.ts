import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared/shared.data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public sharedDataService: SharedDataService) {
    sharedDataService.title = 'Inicio';
    sharedDataService.bc = [
      { link: '/', title: 'Home', active: 'active' }
    ];
  }

  ngOnInit() {
  }

}
