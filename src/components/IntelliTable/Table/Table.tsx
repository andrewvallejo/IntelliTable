import Row from './Row/Row';
import styles from './Table.module.css';
import type { TableCell } from '@/types/table';

type Props = {
  headers: string[];
  rows: TableCell[][];
};

export default function Table({ headers, rows }: Props) {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          {headers.map((h, i) => (
            <th key={i} className={styles.tableHeading}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {rows.map((row, i) => (
          <Row key={i} row={row} rowIndex={i} />
        ))}
      </tbody>
    </table>
  );
}
