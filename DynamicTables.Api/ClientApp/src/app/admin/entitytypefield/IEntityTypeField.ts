import { IEntityBase } from '../../shared/IEntityBase';
import { EnumFieldType } from './EnumFieldType';

export interface IEntityTypeField extends IEntityBase {
  icon: string;
  label: string;
  html: string;
  javaScript: string;
  css: string;
  code: string;
  fotmat: string;
  fieldType: EnumFieldType;
}
