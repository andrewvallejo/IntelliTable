import styles from './TagCell.module.css';

export default function TagCell({
  cell,
}: {
  cell: string | number | boolean | Date | Array<string | number | boolean>;
}) {
  return (
    <div className={styles.flexWrap}>
      {Array.isArray(cell) && cell.length > 3 ? (
        <>
          <div className={styles.gridWrap}>
            {cell.map((item, index) => (
              <span key={index} className={styles.tag}>
                {String(item)}
              </span>
            ))}
          </div>
        </>
      ) : Array.isArray(cell) ? (
        cell.map((item, index) => (
          <span key={index} className={styles.tag}>
            {String(item)}
          </span>
        ))
      ) : (
        <span className={styles.tag}>{String(cell)}</span>
      )}
    </div>
  );
}
