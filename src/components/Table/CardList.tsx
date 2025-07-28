// CardList.tsx
import styles from './styles/CardList.module.css';
import { Cell } from './IntelliCell';
import { renderValue } from '../../utils';
import type { TableCell } from '../../types/table';

type Props = {
  headers: string[];
  rows: TableCell[][];
};

export default function CardList({ headers, rows }: Props) {
  return (
    <div className={styles.cardList}>
      {rows.map((row, rowIdx) => (
        <div className={styles.card} key={rowIdx}>
          <header>
            <h4>{renderValue(row[1])}</h4>
            <h3>{renderValue(row[0])}</h3>
          </header>

          {row.slice(2).map((cell, cellIdx) => (
            <div className={styles.cardRow} key={cellIdx}>
              <span className={styles.cardLabel}>{headers[cellIdx + 2]}:</span>
              <span className={styles.cardValue}>
                <Cell cellIndex={cellIdx} cell={cell} />
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
