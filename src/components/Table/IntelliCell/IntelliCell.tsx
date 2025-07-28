import styles from './IntelliCell.module.css';
import { Cell } from '.';

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
          <Cell.Checkmark value={cell} />
        ) : Array.isArray(cell) &&
          cell.every((item) => typeof item === 'string') ? (
          <Cell.Tag cell={cell} />
        ) : Array.isArray(cell) ? (
          cell.join(', ')
        ) : (
          String(cell)
        )}
      </div>
    </td>
  );
}
