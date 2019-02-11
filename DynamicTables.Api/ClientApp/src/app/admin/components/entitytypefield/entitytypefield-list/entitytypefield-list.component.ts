import { Component, OnInit } from '@angular/core';
import { EntityTypeField } from '../../../interfaces/entity-type-field.model';
import { EntityTypeFieldService } from '../../../services/entity-type-field.service';

@Component({
  selector: 'app-entitytypefield-list',
  templateUrl: './entitytypefield-list.component.html',
  styleUrls: ['./entitytypefield-list.component.css']
})
export class EntitytypefieldListComponent implements OnInit {

  public dataItems: EntityTypeField[];
  constructor( public service: EntityTypeFieldService ) { }

  ngOnInit() {
    this.service.get().subscribe(data => {
        this.dataItems = data;
    });
  }

}
