import { SharedDataService } from '../../../shared/services/shared.data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-type',
  templateUrl: './entity-type.component.html',
  styleUrls: ['./entity-type.component.css']
})
export class EntityTypeComponent implements OnInit {

  constructor(public sharedDataService: SharedDataService) {
    sharedDataService.title = 'My Entities';
  }

  ngOnInit() {
  }

}
