import { Component, OnInit } from '@angular/core';
import { EntityTypeField } from '../../../interfaces/entity-type-field.model';
import { EntityTypeFieldService } from '../../../services/entity-type-field.service';

@Component({
  selector: 'app-entity-type-field-list',
  templateUrl: './entity-type-field-list.component.html',
  styleUrls: ['./entity-type-field-list.component.css']
})
export class EntityTypeFieldListComponent implements OnInit {

  public dataItems: EntityTypeField[];
  constructor( public service: EntityTypeFieldService ) { }

  ngOnInit() {
    this.service.get().subscribe(data => {
        this.dataItems = data;
    });
  }

}
