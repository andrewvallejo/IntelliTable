import type { CellProps } from '@/types/cell';
// import styles from './LinkCell.module.css';

export default function LinkCell({ cell }: CellProps) {
  const url = cell as string;
  const domain = new URL(url).hostname.replace('www.', '');
  const displayText =
    domain.charAt(0).toUpperCase() + domain.slice(1).split('.')[0];

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {displayText}
    </a>
  );
}
