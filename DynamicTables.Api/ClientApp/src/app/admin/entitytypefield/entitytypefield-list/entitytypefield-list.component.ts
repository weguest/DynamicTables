import { Component, OnInit } from '@angular/core';
import { IEntityTypeField } from '../IEntityTypeField';
import { EntityTypeFieldService } from '../EntityTypeField.service';

@Component({
  selector: 'app-entitytypefield-list',
  templateUrl: './entitytypefield-list.component.html',
  styleUrls: ['./entitytypefield-list.component.css']
})
export class EntitytypefieldListComponent implements OnInit {

  public dataItems: IEntityTypeField[];
  constructor( public service: EntityTypeFieldService ) { }

  ngOnInit() {
    this.service.get().subscribe(data => {
        this.dataItems = data;
    });
  }

}
