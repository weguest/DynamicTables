import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityTypeService } from 'src/app/admin/services/entity-type.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entitytype-list',
  templateUrl: './entity-type-list.component.html',
  styleUrls: ['./entity-type-list.component.css']
})
export class EntityTypeListComponent implements OnInit {
  constructor(
    public service: EntityTypeService,
    public router: Router
  ) { }

  public gridApi;
  public gridColumnApi;

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

  rowSelection = 'single';

  rowData = null;


  ngOnInit() {
    this.rowData = this.service.get();
  }

  onRowDoubleClicked(row): void {
    this.router.navigate(['/admin/entitytype/edit/' + row.data.name ]);
    console.log(row);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }

}
