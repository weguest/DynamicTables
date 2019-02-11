import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared/services/shared.data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public sharedDataService: SharedDataService) {
    sharedDataService.title = 'Inicio';
  }

  ngOnInit() {
  }

}
