import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityTypeService } from 'src/app/admin/services/entity-type.service';

@Component({
  selector: 'app-entitytype-list',
  templateUrl: './entitytype-list.component.html',
  styleUrls: ['./entitytype-list.component.css']
})
export class EntitytypeListComponent implements OnInit {
  constructor(
    public service: EntityTypeService
  ) { }


  columnDefs = [
    {headerName: 'Id', field: 'id' },
    {headerName: 'Label', field: 'label' },
    {headerName: 'Name', field: 'name' },
    {headerName: 'Description', field: 'description' },
    {
      headerName: 'Created',
      field: 'created',
      cellRenderer: (data) => {
        return new Date(data.value).toLocaleString();
      }
    },
    {
      headerName: 'Modified',
      field: 'modified',
      cellRenderer: (data) => {
        return new Date(data.value).toLocaleString();
      }
    }
  ];

  gridOptions = {
    suppressHorizontalScroll: false,
    enableSorting: true
  };

  defaultColDef = { resizable: true };

  rowData = null;


  ngOnInit() {
    this.rowData = this.service.get();
  }

  onRowDoubleClicked(row): void {
    console.log(row);
  }

}
