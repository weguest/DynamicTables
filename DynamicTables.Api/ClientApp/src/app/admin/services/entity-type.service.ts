import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceBase } from 'src/app/shared/services/base.service';
import { DeleteResult } from 'src/app/shared/interfaces/delete-result.model';
import { EntityType } from '../interfaces/entity-type.model';

@Injectable()
export class EntityTypeService extends ServiceBase {

    public get(): Observable<EntityType[]> {
        return this._client.get<EntityType[]>('/api/EntityType');
    }

    public getByName(name: string): Observable<EntityType> {
      return this._client.get<EntityType>(`/api/EntityType/${name}`);
    }

    public put(m: EntityType): Observable<EntityType> {
      return this._client.put<EntityType>('/api/EntityType/' + m.id, m);
    }

    public post(m: EntityType): Observable<EntityType> {
      return this._client.post<EntityType>('/api/EntityType', m);
    }

    public delete(id: string): Observable<DeleteResult> {
      return this._client.delete<DeleteResult>('/api/EntityType/' + id);
    }

}
