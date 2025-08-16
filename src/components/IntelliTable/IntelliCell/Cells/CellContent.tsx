import EmptyCell from './EmptyCell.tsx/EmptyCell';
import type { CellProps, CellType } from '@/types/cell';
import { Cells } from '.';
import type { ColumnMeta } from '@/types/column';
import type { JSXElementConstructor } from 'react';

const typeMap: Partial<
  Record<
    CellType,
    JSXElementConstructor<{ cell: CellProps['cell']; column: ColumnMeta }>
  >
> = {
  text: Cells.Text,
  link: Cells.Link,
  boolean: Cells.Checkmark,
  tags: Cells.Tag,
  number: Cells.Number,
  date: Cells.Date,
  currency: Cells.Currency,
  rating: Cells.Rating,
  progress: Cells.Progress,
  select: Cells.Select,
  avatar: Cells.Avatar,
} as const;

interface Props {
  cell: CellProps['cell'];
  column: ColumnMeta;
}

export default function CellContents({ cell, column }: Props) {
  const type = column?.type;
  const CellComponent = type ? typeMap[type] : undefined;
  const isArray = Array.isArray(cell);
  const hasValue =
    cell !== undefined &&
    cell !== null &&
    cell !== '' &&
    (!isArray || cell.length > 0);

  return (
    <>
      {!hasValue ? (
        <EmptyCell />
      ) : CellComponent ? (
        <CellComponent cell={cell} column={column} />
      ) : (
        <>{String(cell)}</>
      )}
    </>
  );
}
