export type TableCell =
  | string
  | number
  | boolean
  | Date
  | Array<string | number | boolean>;

export type CellType =
  | 'text'
  | 'number'
  | 'currency'
  | 'boolean'
  | 'date'
  | 'link'
  | 'tags'
  | 'rating'
  | 'progress'
  | 'select'
  | 'avatar';

export type CellProps = { cell: TableCell };
