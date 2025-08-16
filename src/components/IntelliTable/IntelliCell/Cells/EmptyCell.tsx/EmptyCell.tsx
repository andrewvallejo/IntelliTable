import { emptyDisplayMap, type EmptyKind } from '@/utils/emptyMap';
import type { ReactElement } from 'react';

interface EmptyCellProps {
  /** What kind of empty state to show; defaulted to '-' */
  kind?: EmptyKind;
}

/** A simple component to render a consistent empty state in table cells */
export default function EmptyCell({
  kind = 'default',
}: EmptyCellProps): ReactElement {
  const { display, label } = emptyDisplayMap[kind];

  return (
    <>
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{label}</span>
    </>
  );
}
