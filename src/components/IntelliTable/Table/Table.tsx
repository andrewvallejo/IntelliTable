import ColumnHeader from './ColumnHeader/ColumnHeader';
import Row from './Row/Row';
import styles from './Table.module.css';
import type { ColumnMeta } from '@/types/column';
import type { TableCell } from '@/types/cell';
import { useSort } from '@/hooks/useSort';

type Props = {
  headers: string[];
  rows: TableCell[][];
  columns: ColumnMeta[];
};

export default function Table({ rows, columns }: Props) {
  const { sortedRows, sortState, toggleSort } = useSort({ rows, columns });

  return (
    <table className={styles.table} role="grid" aria-rowcount={rows.length}>
      <thead className={styles.tableHeader}>
        <tr>
          {columns.map((c, i) => (
            <ColumnHeader
              key={i}
              label={c.header ?? String(c.key)}
              sortState={sortState[c.key] ?? 'none'}
              onToggle={() => toggleSort(String(c.key))}
            />
          ))}
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {sortedRows.map((row, i) => (
          <Row key={i} row={row} rowIndex={i} columns={columns} />
        ))}
      </tbody>
    </table>
  );
}
