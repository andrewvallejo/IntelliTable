import type { TableCell } from '@/types/cell';
import { typeCheck } from './typeCheck';

export const cellSwitch = ({ cell }: { cell: TableCell }) => {
  if (typeCheck.boolean(cell)) return 'boolean';
  if (typeCheck.tag(cell)) return 'tag';
  if (typeCheck.array(cell)) return 'array';
  if (typeCheck.link(cell)) return 'link';
  if (typeCheck.string(cell)) return 'string';
  if (typeCheck.number(cell)) return 'number';
  if (typeCheck.date(cell)) return 'date';
  return 'string';
};
