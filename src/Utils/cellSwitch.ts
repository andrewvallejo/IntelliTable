// cellSwitch.ts

import type { CellType, TableCell } from '@/types/cell';
import { typeCheck } from './typeCheck';

export const cellSwitch = ({ cell }: { cell: TableCell }): CellType => {
  if (typeCheck.boolean(cell)) return 'boolean';
  if (typeCheck.tag(cell) || typeCheck.array(cell)) return 'tags'; // ← unified
  if (typeCheck.link(cell)) return 'link';
  if (typeCheck.number(cell)) return 'number';
  if (typeCheck.date(cell)) return 'date';
  if (typeCheck.string(cell)) return 'text'; // ← not "string"
  return 'text';
};
