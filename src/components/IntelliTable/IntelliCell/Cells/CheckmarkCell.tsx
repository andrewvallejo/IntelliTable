import styles from './CheckmarkCell.module.css';

type Props = {
  cell: boolean;
};

export default function CheckmarkCell({ cell }: Props) {
  return (
    <div
      className={`${styles.iconWrapper} ${cell ? styles.true : styles.false}`}
      role="img"
      aria-label={cell ? 'True' : 'False'}
    >
      <span className={`${styles.icon} ${!cell ? styles.iconX : ''}`}>
        {cell ? '✓' : '×'}
      </span>
    </div>
  );
}
