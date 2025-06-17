import styles from './Table.module.css';
import { formatDataToTableFormat } from '../../utils';
import { tableData } from '../../assets/mockData';

import TableRow from './TableRow';
import TableCell from './TableCell';

export default function Table() {
  const { headers, rows } = formatDataToTableFormat(tableData);

  return (
    <div className={styles.tableWrapper}>
      {/* Desktop Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className={styles.tableHeader}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex} row={row} rowIndex={rowIndex} />
          ))}
        </tbody>
      </table>
      {/* Mobile Cards */}
      <div className={styles.cardList}>
        {rows.map((row, rowIdx) => (
          <div className={styles.card} key={rowIdx}>
            <header>
              <h4>{row[1]}</h4>
              <h3>{row[0]}</h3>
            </header>
            {row.slice(2).map((cell, cellIdx) => (
              <div className={styles.cardRow} key={cellIdx}>
                <span className={styles.cardLabel}>{`${
                  headers[cellIdx + 2]
                }:`}</span>
                <span className={styles.cardValue}>
                  <TableCell cellIndex={cellIdx} cell={cell} />
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
