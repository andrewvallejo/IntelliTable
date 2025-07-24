import styles from './TagCell.module.css';

export default function TagCell({
  cell,
}: {
  cell: string | number | boolean | Date | Array<string | number | boolean>;
}) {
  const isArray = Array.isArray(cell);
  const displayAsGrid = isArray && cell.length > 3;

  return (
    <div className={styles.flexWrap}>
      {isArray ? (
        <div className={displayAsGrid ? styles.tagGrid : styles.tagGroup}>
          {cell.map((item, index) => (
            <span key={index} className={styles.tag}>
              {String(item)}
            </span>
          ))}
        </div>
      ) : (
        <span className={styles.tag}>{String(cell)}</span>
      )}
    </div>
  );
}
