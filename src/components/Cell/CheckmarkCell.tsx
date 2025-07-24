import styles from './CheckmarkCell.module.css';

type Props = {
  value: boolean;
};

export default function CheckmarkCell({ value }: Props) {
  return (
    <div
      className={`${styles.iconWrapper} ${value ? styles.true : styles.false}`}
      role="img"
      aria-label={value ? 'True' : 'False'}
    >
      <span className={`${styles.icon} ${!value ? styles.iconX : ''}`}>
        {value ? '✓' : '×'}
      </span>
    </div>
  );
}
