import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceBase } from 'src/app/shared/services/base.service';
import { Module } from '../interfaces/module.model';
import { EntityType } from '../interfaces/entity-type.model';
import { DeleteResult } from 'src/app/shared/interfaces/delete-result.model';

@Injectable()
export class ModuleService extends ServiceBase {
    public getModules(): Observable<Module[]> {
        return this._client.get<Module[]>('/api/module');
    }

    public getById(id: string): Observable<Module[]> {
      const p = new HttpParams().set('id', id);
      return this._client.get<Module[]>('/api/module/', { params: p });
    }

    public getByName(name: string): Observable<Module> {
      return this._client.get<Module>(`/api/module/${name}/GetByName`);
    }

    public getEntitites(name: string): Observable<EntityType[]> {
      const p = new HttpParams().set('name', name);
      return this._client.get<EntityType[]>(`/api/module/${name}/Entities`);
    }

    public put(m: Module): Observable<Module> {
      return this._client.put<Module>('/api/module/' + m.id, m);
    }

    public post(m: Module): Observable<Module> {
      return this._client.post<Module>('/api/module/', m);
    }

    public delete(id: string): Observable<DeleteResult> {
      return this._client.delete<DeleteResult>('/api/module/' + id);
    }

}
