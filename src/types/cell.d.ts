export type TableCell =
  | string
  | number
  | boolean
  | Date
  | Array<string | number | boolean>;

export type CellProps = { cell: TableCell };
