import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public title = 'Pagina';
  public bc = [];

  constructor() { }
}
