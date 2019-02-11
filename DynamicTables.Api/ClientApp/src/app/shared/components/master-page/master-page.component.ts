import { Component, OnInit } from '@angular/core';
import { SharedDataService } from './../../services/shared.data.service';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {

  constructor( public data: SharedDataService ) { }

  ngOnInit() {

  }

}
