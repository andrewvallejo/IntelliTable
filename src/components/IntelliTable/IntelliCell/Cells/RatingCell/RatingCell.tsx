import type { CellProps } from '@/types/cell';
import { Star } from '../primitives';

export default function RatingCell({ cell }: CellProps) {
  const rating = typeof cell === 'number' ? cell : 0;

  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} index={index} rating={rating} />
      ))}
    </>
  );
}
