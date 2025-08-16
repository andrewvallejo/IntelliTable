import styles from './ColumnHeader.module.css';
import type { ReactElement } from 'react';

export interface IColumnHeaderProps {
  label: string;
  sortState: 'asc' | 'desc' | 'none';
  onToggle: () => void;
}

export default function ColumnHeader({
  label,
  sortState,
  onToggle,
}: IColumnHeaderProps): ReactElement {
  const sortMap = {
    none: 'None',
    asc: 'Ascending',
    desc: 'Descending',
  };

  const sortDir = sortMap[sortState];

  return (
    <th
      scope="col"
      aria-sort={
        sortState === 'none'
          ? 'none'
          : sortState === 'asc'
          ? 'ascending'
          : 'descending'
      }
      className={styles.th}
    >
      <button
        type="button"
        aria-label={`${label}, ${
          sortDir === 'none' ? 'not sorted' : `sorted ${sortDir}`
        }. Activate to ${
          sortDir === 'ascending' ? 'sort descending' : 'sort ascending'
        }.`}
        onClick={onToggle}
        className={styles.button}
      >
        <span className={styles.label}>{label}</span>
        <span aria-hidden="true" title={sortDir} className={styles.icon}>
          {sortState === 'asc' ? '▲' : sortState === 'desc' ? '▼' : '↕'}
        </span>
      </button>
    </th>
  );
}
