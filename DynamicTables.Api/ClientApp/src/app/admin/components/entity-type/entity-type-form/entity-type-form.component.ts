import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared/services/shared.data.service';
import { EntityTypeService } from 'src/app/admin/services/entity-type.service';

@Component({
  selector: 'app-entitytype-form',
  templateUrl: './entity-type-form.component.html',
  styleUrls: ['./entity-type-form.component.css']
})
export class EntityTypeFormComponent implements OnInit {

  public isModified = false;
  public model: any = {};
  public formType = { 'new': 1, 'edit': 2, 'delete': 3, 'details': 4 };
  public formLayout = this.formType.new;


  content = '<strong>Hi</strong>';
  contentAutoUpdate = 'SELECT * FROM autoUpdate;';
  myCode = 'SELECT * FROM tabs;';

  @ViewChild('editorcss') editorcss;
  @ViewChild('editorjs') editorjs;
  @ViewChild('editorhtml') editorhtml;
  @ViewChild('editorcode') editorcode;

  constructor (
    public sharedDataService: SharedDataService,
    public service: EntityTypeService,
    public route: ActivatedRoute,
    private _location: Location
  ) {

  }

  onRuleChange(e) {
    console.log(e);
  }

  setupEditor( editor: any ): void {

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
    this.sharedDataService.title = 'New Field Type';
  }
  editForm(): void {
    this.sharedDataService.title = 'Edit Field Type';
    this.route.paramMap.subscribe(params => {
      this.model.id = params.get('id');
      this.service.getByName( params.get('id') ).subscribe(data => {
        this.model = data;
        console.log(data);
      });
    });
  }
  deleteForm(): void {
    this.sharedDataService.title = 'Delete Field Type';
    this.route.paramMap.subscribe(params => {
      this.model.id = params.get('id');
      console.log( this.model.id );
    });
  }
  detailsForm(): void {
    this.sharedDataService.title = 'Details Field Type';
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
