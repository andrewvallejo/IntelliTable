import styles from './IntelliCell.module.css';
import { Cells } from './Cells';

// import { extractType } from '../../utils';

interface Props {
  cellIndex: number;
  cell: string | number | boolean | Date | Array<string | number | boolean>;
}

export default function IntelliCell({ cell }: Props) {
  // const cellType = extractType(cell);

  return (
    <td className={styles.cell}>
      <div className={styles.cellInner}>
        {typeof cell === 'boolean' ? (
          <Cells.Checkmark value={cell} />
        ) : Array.isArray(cell) &&
          cell.every((item) => typeof item === 'string') ? (
          <Cells.Tag cell={cell} />
        ) : Array.isArray(cell) ? (
          cell.join(', ')
        ) : (
          String(cell)
        )}
      </div>
    </td>
  );
}
