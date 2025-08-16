import IntelliCell from '../IntelliCell/IntelliCell';
import styles from './CardList.module.css';
import type { ColumnMeta } from '@/types/column';
import { renderValue } from '@/utils/tableData';
import type { TableCell } from '@/types/cell';

type Props = {
  headers: string[];
  rows: TableCell[][];
  columns: ColumnMeta[]; // NEW
};

export default function CardList({ headers, rows, columns }: Props) {
  return (
    <div className={styles.cardList}>
      {rows.map((row, rowIdx) => (
        <div className={styles.card} key={rowIdx}>
          <header>
            <h4>{renderValue(row[1])}</h4>
            <h3>{renderValue(row[0])}</h3>
          </header>

          {row.slice(2).map((cell, cellIdx) => {
            const colIdx = cellIdx + 2; // because we sliced off the first two
            const column = columns?.[colIdx];
            const label = column?.header ?? headers[colIdx];

            return (
              <div className={styles.cardRow} key={cellIdx}>
                <span className={styles.cardLabel}>{label}:</span>
                <span className={styles.cardValue}>
                  <IntelliCell cellIndex={colIdx} cell={cell} column={column} />
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
