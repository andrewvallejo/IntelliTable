import type { CellType } from './cell';

export interface ColumnMeta<K extends keyof any = string> {
  key: K;
  type: CellType;
  header?: string;
  editable?: boolean;
  visible?: boolean;
  // options?: readonly Option<any>[]; // for select, etc.
}
