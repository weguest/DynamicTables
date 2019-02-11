import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../services/module.service';
import { Module } from '../../../interfaces/module.model';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  public dataItems: Module[];
  constructor( public service: ModuleService ) { }

  ngOnInit() {
    this.service.getModules().subscribe(data => {
        this.dataItems = data;
    });
  }

}
