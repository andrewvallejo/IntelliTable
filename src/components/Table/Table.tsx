import styles from './Table.module.css';
import TableCell from './TableCell';
import TableRow from './TableRow';
import { formatDataToTableFormat } from '../../utils';
import { tableData } from '../../assets/mockData';

export default function Table() {
  const { headers, rows } = formatDataToTableFormat(tableData);

  return (
    <div className={styles.tableWrapper}>
      {/* Desktop Table */}
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className={styles.tableHeading}>
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
