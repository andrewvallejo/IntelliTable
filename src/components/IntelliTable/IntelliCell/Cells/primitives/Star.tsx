import styles from './Primitives.module.css';

interface IStarProps {
  index: number;
  rating: number;
}

export default function Star({ index, rating }: IStarProps) {
  return (
    <span
      className={`${styles.star} ${
        index < rating ? styles.filled : styles.empty
      }`}
    >
      ★
    </span>
  );
}
