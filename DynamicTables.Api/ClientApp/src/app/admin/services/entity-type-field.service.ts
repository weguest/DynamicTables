import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceBase } from 'src/app/shared/services/base.service';
import { DeleteResult } from 'src/app/shared/interfaces/delete-result.model';
import { EntityTypeField } from './../interfaces/entity-type-field.model';

@Injectable()
export class EntityTypeFieldService extends ServiceBase {

    public get(): Observable<EntityTypeField[]> {
        return this._client.get<EntityTypeField[]>('/api/EntityTypeField');
    }

    public getByName(name: string): Observable<EntityTypeField> {
      return this._client.get<EntityTypeField>(`/api/EntityTypeField/${name}`);
    }

    public put(m: EntityTypeField): Observable<EntityTypeField> {
      return this._client.put<EntityTypeField>('/api/EntityTypeField/' + m.id, m);
    }

    public post(m: EntityTypeField): Observable<EntityTypeField> {
      return this._client.post<EntityTypeField>('/api/EntityTypeField', m);
    }

    public delete(id: string): Observable<DeleteResult> {
      return this._client.delete<DeleteResult>('/api/EntityTypeField/' + id);
    }

}
