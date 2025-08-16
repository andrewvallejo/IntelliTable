import CellContents from './Cells/CellContent';
import styles from './IntelliCell.module.css';
import type { CellProps } from '@/types/cell';
import type { ColumnMeta } from '@/types/column';

interface Props {
  cellIndex: number;
  cell: CellProps['cell'];
  column: ColumnMeta;
}

export default function IntelliCell({ cell, column }: Props) {
  return (
    <td className={styles.cell} data-type={column?.type}>
      <div className={styles.cellInner}>
        <CellContents cell={cell} column={column} />
      </div>
    </td>
  );
}
