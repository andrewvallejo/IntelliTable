/** Different kinds of empty states that can be displayed in a table cell */
export type EmptyKind =
  | 'default'
  | 'dash'
  | 'emptySet'
  | 'na'
  | 'none'
  | 'custom';

/** The display and screen reader label for an empty state */
interface EmptyDisplay {
  /** The visual representation of the empty state */
  display: string;
  /** The screen reader label for the empty state */
  label: string;
}

/** A mapping of different empty states to their display and screen reader labels */
export const emptyDisplayMap: Record<EmptyKind, EmptyDisplay> = {
  default: { display: '-', label: 'Empty' },
  dash: { display: '—', label: 'Empty' },
  emptySet: { display: '∅', label: 'No value' },
  na: { display: 'N/A', label: 'Not applicable' },
  none: { display: '', label: 'None' },
  custom: { display: '?', label: 'Missing' },
};

// TODO: Implement this when cell object is expanded
// const defaultEmptyKinds: Record<CellType, EmptyKind> = {
//   text: 'default', // "-"
//   link: 'default', // "-"
//   boolean: 'none', // ""
//   tags: 'none', // ""
//   number: 'na', // "N/A"
//   date: 'dash', // "—"
//   currency: 'na', // "N/A"
//   rating: 'na', // "N/A"
//   progress: 'na', // "N/A"
//   select: 'na', // "N/A"
//   avatar: 'none', // ""
// };
