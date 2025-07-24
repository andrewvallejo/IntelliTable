import CheckmarkCell from '../Cell/CheckmarkCell';
import styles from './TableCell.module.css';
import TagCell from '../Cell/TagCell';
// import { extractType } from '../../utils';

interface Props {
  cellIndex: number;
  cell: string | number | boolean | Date | Array<string | number | boolean>;
}

export default function TableCell({ cell }: Props) {
  // const cellType = extractType(cell);

  return (
    <td className={styles.cell}>
      <div className={styles.cellInner}>
        {typeof cell === 'boolean' ? (
          <CheckmarkCell value={cell} />
        ) : Array.isArray(cell) &&
          cell.every((item) => typeof item === 'string') ? (
          <TagCell cell={cell} />
        ) : Array.isArray(cell) ? (
          cell.join(', ')
        ) : (
          String(cell)
        )}
      </div>
    </td>
  );
}
