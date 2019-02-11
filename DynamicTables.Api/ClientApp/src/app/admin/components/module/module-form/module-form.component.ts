import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import { ModuleService } from '../../../services/module.service';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/shared/services/shared.data.service';


@Component({
  selector: 'app-module-form',
  templateUrl: './module-form.component.html',
  styleUrls: ['./module-form.component.css']
})
export class ModuleFormComponent implements OnInit {

  public isModified = false;
  public model: any = {};
  public formType = { 'new': 1, 'edit': 2, 'delete': 3, 'details': 4 };
  public formLayout = this.formType.new;

  constructor (
    public sharedDataService: SharedDataService,
    public service: ModuleService,
    public route: ActivatedRoute,
    private _location: Location ) {

  }

  ngOnInit() {

      switch (this.route.routeConfig.path) {
        case 'new': this.newForm(); break;
        case 'edit/:id': this.editForm(); break;
        case 'delete/:id': this.deleteForm(); break;
        case 'details/:id': this.detailsForm(); break;
        default:
          case 'new': this.newForm(); break;
          break;
      }
  }

  newForm(): void {
    this.sharedDataService.title = 'New Modulo';
  }
  editForm(): void {
    this.sharedDataService.title = 'Edit Modulo';
    this.route.paramMap.subscribe(params => {
      this.model.id = params.get('id');
      this.service.getByName( params.get('id') ).subscribe(data => {
        this.model = data;
        console.log(data);
      });
    });
  }
  deleteForm(): void {
    this.sharedDataService.title = 'Delete Modulo';
    this.route.paramMap.subscribe(params => {
      this.model.id = params.get('id');
      console.log( this.model.id );
    });
  }
  detailsForm(): void {
    this.sharedDataService.title = 'Details Modulo';
    this.route.paramMap.subscribe(params => {
      this.model.id = params.get('id');
      console.log( this.model.id );
    });
   }

   save(): void {
    if ( this.model.id == null ) {
      this.service.post( this.model  ).subscribe(data => {
        this._location.back();
      });
    } else {
      this.service.put( this.model  ).subscribe(data => {
        this._location.back();
      });
    }
   }

   delete(): void {
     if (confirm('Deseja excluir o registro selecionado?')) {
        this.service.delete( this.model.id  ).subscribe(data => {
            console.log(data);
            this._location.back();
        });
     }
   }

   back(): void {
     if (this.isModified) {
        if (confirm('Deseja sair sem salvar?')) {
            this._location.back();
        }
     } else {
       this._location.back();
     }
   }

}
