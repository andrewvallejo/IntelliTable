import styles from './LinkCell.module.css';

export default function LinkCell({ value }: { value: string }) {
  return (
    <a
      href={value}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {value}
    </a>
  );
}
