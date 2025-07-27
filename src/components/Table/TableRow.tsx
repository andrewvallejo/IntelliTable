import styles from './TableRow.module.css';
import TableCell from './TableCell';

interface Props {
  row: Array<
    string | number | boolean | Date | Array<string | number | boolean>
  >;
  rowIndex: number;
}

export default function TableRow({ row, rowIndex }: Props) {
  const isEven = rowIndex % 2 === 0;
  console.log('isEven', isEven);
  return (
    // TODO: remove row index if not used for anything else
    <tr
      className={`${styles.row} ${isEven ? styles.rowAlt : ''}`}
      key={rowIndex}
    >
      {row.map((cell, cellIndex) => (
        <TableCell key={cellIndex} cellIndex={cellIndex} cell={cell} />
      ))}
    </tr>
  );
}
