import styles from './CheckmarkCell.module.css';

type Props = {
  value: boolean;
};

export default function CheckmarkCell({ value }: Props) {
  return (
    <div
      className={`${styles.iconWrapper} ${value ? styles.true : styles.false}`}
    >
      {value ? (
        <span className={styles.icon}>✔</span>
      ) : (
        <span className={styles.icon}>✖</span>
      )}
    </div>
  );
}
