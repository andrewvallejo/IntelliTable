import TableCell from './TableCell';
import styles from './TableRow.module.css';

interface Props {
  row: Array<
    string | number | boolean | Date | Array<string | number | boolean>
  >;
  rowIndex: number;
}

export default function TableRow({ row, rowIndex }: Props) {
  return (
    <tr className={styles.row} key={rowIndex}>
      {row.map((cell, cellIndex) => (
        <TableCell key={cellIndex} cellIndex={cellIndex} cell={cell} />
      ))}
    </tr>
  );
}
