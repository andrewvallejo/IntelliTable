import styles from './Row.module.css';
import { IntelliCell } from '@/components/IntelliTable/IntelliCell';

interface Props {
  row: Array<
    string | number | boolean | Date | Array<string | number | boolean>
  >;
  rowIndex: number;
}

export default function Row({ row, rowIndex }: Props) {
  const isEven = rowIndex % 2 === 0;
  return (
    // TODO: remove row index if not used for anything else
    <tr
      className={`${styles.row} ${isEven ? styles.rowAlt : ''}`}
      key={rowIndex}
    >
      {row.map((cell, cellIndex) => (
        <IntelliCell key={cellIndex} cellIndex={cellIndex} cell={cell} />
      ))}
    </tr>
  );
}
