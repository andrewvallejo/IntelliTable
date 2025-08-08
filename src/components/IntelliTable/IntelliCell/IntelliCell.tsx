import styles from './IntelliCell.module.css';
import type { CellProps } from '@/types/cell';
import { Cells } from './Cells';
import { cellSwitch } from '@/utils/cellSwitch';

// import { extractType } from '../../utils';

interface Props {
  cellIndex: number;
  cell: CellProps['cell'];
}

const cellMap = {
  boolean: Cells.Checkmark,
  array: Cells.Tag,
  tag: Cells.Tag,
  // string: Cells.Text,
  link: Cells.Link,
  // number: Cells.Number,
  // date: Cells.Date,
};
export default function IntelliCell({ cell }: Props) {
  // const cellType = extractType(cell);

  const cellType = cellSwitch({ cell });
  console.log('cellType', cellType);

  const CellComponent = cellMap[cellType as keyof typeof cellMap];
  const isArray = Array.isArray(cell);
  const hasValue =
    cell !== undefined &&
    cell !== null &&
    cell !== '' &&
    (!isArray || cell.length > 0);

  return (
    <td className={styles.cell}>
      <div className={styles.cellInner}>
        {hasValue ? (
          CellComponent ? (
            <CellComponent cell={cell} />
          ) : (
            String(cell)
          )
        ) : (
          '-'
        )}
      </div>
    </td>
  );
}
