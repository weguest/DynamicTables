import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceBase } from 'src/app/shared/base.service';
import { IModule } from './IModule';
import { IEntityType } from '../entitytype/IEntityType';
import { IDeleteResult } from 'src/app/shared/IDeleteResult';

@Injectable()
export class ModuleService extends ServiceBase {
    public getModules(): Observable<IModule[]> {
        return this._client.get<IModule[]>('/api/module');
    }

    public getById(id: string): Observable<IModule[]> {
      const p = new HttpParams().set('id', id);
      return this._client.get<IModule[]>('/api/module/', { params: p });
    }

    public getByName(name: string): Observable<IModule> {
      return this._client.get<IModule>(`/api/module/${name}/GetByName`);
    }

    public getEntitites(name: string): Observable<IEntityType[]> {
      const p = new HttpParams().set('name', name);
      return this._client.get<IEntityType[]>(`/api/module/${name}/Entities`);
    }

    public put(m: IModule): Observable<IModule> {
      return this._client.put<IModule>('/api/module/' + m.id, m);
    }

    public post(m: IModule): Observable<IModule> {
      return this._client.post<IModule>('/api/module/', m);
    }

    public delete(id: string): Observable<IDeleteResult> {
      return this._client.delete<IDeleteResult>('/api/module/' + id);
    }

}
