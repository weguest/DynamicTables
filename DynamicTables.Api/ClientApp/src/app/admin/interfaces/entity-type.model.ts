import { EntityBase } from '../../shared/interfaces/entity-base.model';
import { EntityTypeField } from './entity-type-field.model';

export interface EntityType extends EntityBase {
  icon: string;
  label: string;

  html: string;
  javaScript: string;
  css: string;
  code: string;

  fields: EntityTypeField[];
  module: string;
}
