import styles from './CheckmarkCell.module.css';

type Props = { cell: boolean };

export default function CheckmarkCell({ cell }: Props) {
  return (
    <div
      className={`${styles.iconWrapper} ${cell ? styles.true : styles.false}`}
      role="img"
      aria-label={cell ? 'True' : 'False'}
    >
      {cell ? <CheckIcon /> : <CrossIcon />}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M20 6L9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
