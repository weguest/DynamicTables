import { EntityBase } from '../../shared/interfaces/entity-base.model';
import { FieldType } from './field-type.enum';

export interface EntityTypeField extends EntityBase {
  icon: string;
  label: string;
  html: string;
  javaScript: string;
  css: string;
  code: string;
  fotmat: string;
  fieldType: FieldType;
}
