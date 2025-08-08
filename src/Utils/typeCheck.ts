// utils/typeChecks.ts

import type { TableCell } from '@/types/cell';

export const isString = (cell: unknown): cell is string =>
  typeof cell === 'string';

export const isBoolean = (cell: unknown): cell is boolean =>
  typeof cell === 'boolean';

export const isTagArray = (cell: unknown): cell is string[] =>
  Array.isArray(cell) && cell.every((item) => typeof item === 'string');

export const isArray = (cell: unknown): cell is Array<TableCell> =>
  Array.isArray(cell) && !isTagArray(cell);

export const isNumber = (cell: unknown): cell is number =>
  typeof cell === 'number';

export const isDate = (cell: unknown): cell is Date => cell instanceof Date;

export const isLink = (cell: unknown): cell is string =>
  isString(cell) && cell.startsWith('http');

export const typeCheck = {
  string: isString,
  boolean: isBoolean,
  tag: isTagArray,
  array: isArray,
  number: isNumber,
  date: isDate,
  link: isLink,
};
