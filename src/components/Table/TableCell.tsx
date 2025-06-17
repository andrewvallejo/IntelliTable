// import styles from './TableRow.module.css';
import { extractType } from '../../utils';
import CheckmarkCell from '../Cell/CheckmarkCell';
import TagCell from '../Cell/TagCell';
import styles from './TableCell.module.css';

interface Props {
  cellIndex: number;
  cell: string | number | boolean | Date | Array<string | number | boolean>;
}

export default function TableCell({ cell }: Props) {
  const cellType = extractType(cell);
  console.log(String(cell), cellType);
  // if cell is boolean, render CheckmarkCell (import it)

  return (
    <td className={styles.cell}>
      <div className={styles['cell-inner']}>
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
