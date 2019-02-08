import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../module.service';
import { IModule } from '../IModule';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  public dataItems: IModule[];
  constructor( public service: ModuleService ) { }

  ngOnInit() {
    this.service.getModules().subscribe(data => {
        this.dataItems = data;
    });
  }

}
