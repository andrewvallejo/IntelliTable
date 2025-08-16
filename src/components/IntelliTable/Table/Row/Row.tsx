import IntelliCell from '../../IntelliCell/IntelliCell';
import styles from './Row.module.css';
import type { ColumnMeta } from '@/types/column';
import type { TableCell } from '@/types/cell';

interface Props {
  row: TableCell[];
  rowIndex: number;
  columns: ColumnMeta[];
}

export default function Row({ row, rowIndex, columns }: Props) {
  const isEven = rowIndex % 2 === 0;

  return (
    <tr
      className={`${styles.row} ${isEven ? styles.rowAlt : ''}`}
      aria-rowindex={rowIndex + 1}
    >
      {row.map((cell, cellIndex) => (
        <IntelliCell
          key={cellIndex}
          cellIndex={cellIndex}
          cell={cell}
          column={columns[cellIndex]}
        />
      ))}
    </tr>
  );
}
