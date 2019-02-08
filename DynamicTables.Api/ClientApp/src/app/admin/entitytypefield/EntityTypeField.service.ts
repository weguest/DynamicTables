import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceBase } from 'src/app/shared/base.service';
import { IEntityType } from '../entitytype/IEntityType';
import { IDeleteResult } from 'src/app/shared/IDeleteResult';
import { IEntityTypeField } from './IEntityTypeField';

@Injectable()
export class EntityTypeFieldService extends ServiceBase {
    public get(): Observable<IEntityTypeField[]> {
        return this._client.get<IEntityTypeField[]>('/api/EntityTypeField');
    }

    public getByName(name: string): Observable<IEntityTypeField> {
      return this._client.get<IEntityTypeField>(`/api/EntityTypeField/${name}`);
    }

    public put(m: IEntityTypeField): Observable<IEntityTypeField> {
      return this._client.put<IEntityTypeField>('/api/EntityTypeField/' + m.id, m);
    }

    public post(m: IEntityTypeField): Observable<IEntityTypeField> {
      return this._client.post<IEntityTypeField>('/api/EntityTypeField', m);
    }

    public delete(id: string): Observable<IDeleteResult> {
      return this._client.delete<IDeleteResult>('/api/EntityTypeField/' + id);
    }

}
