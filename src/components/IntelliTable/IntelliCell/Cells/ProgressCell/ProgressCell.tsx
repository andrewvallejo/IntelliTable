import styles from './ProgressCell.module.css';
import type { CellProps } from '@/types/cell';

export default function ProgressCell({ cell }: CellProps) {
  const raw = typeof cell === 'number' ? cell : 0;
  const value = Math.max(0, Math.min(100, Math.round(raw)));
  const status = value >= 80 ? 'good' : value >= 40 ? 'warn' : 'poor';

  return (
    <div className={styles.track} data-status={status}>
      <div
        className={styles.bar}
        style={{ ['--w' as any]: `${value}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span className={styles.value}>{value}%</span>
      </div>
    </div>
  );
}
