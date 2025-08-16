import type { ColumnMeta } from '@/types/column';
import type { TableCell } from '@/types/cell';
import { useCallback, useMemo, useState } from 'react';

export type SortDirection = 'asc' | 'desc' | 'none';

interface UseSortResult {
  sortedRows: TableCell[][];
  sortState: Record<string, SortDirection>;
  toggleSort: (key: string) => void;
}

interface UseSortProps {
  rows: TableCell[][];
  columns: ColumnMeta[];
}

/** Manage sorting state for an IntelliTable */
export function useSort({ rows, columns }: UseSortProps): UseSortResult {
  const [sortState, setSortState] = useState<Record<string, SortDirection>>({});

  const toggleSort = useCallback((key: string) => {
    setSortState((prev) => {
      const current = prev[key] ?? 'none';
      const next: SortDirection =
        current === 'none' ? 'asc' : current === 'asc' ? 'desc' : 'none';

      return { [key]: next };
    });
  }, []);

  const sortedRows = useMemo(() => {
    const active = Object.entries(sortState).find(([, dir]) => dir !== 'none');
    if (!active) return rows;

    const [sortKey, direction] = active;
    const colIndex = columns.findIndex((c) => String(c.key) === sortKey);
    if (colIndex === -1) return rows;

    return [...rows].sort((a, b) => {
      const valA = a[colIndex];
      const valB = b[colIndex];

      const aNorm = valA instanceof Date ? valA.getTime() : valA;
      const bNorm = valB instanceof Date ? valB.getTime() : valB;

      if (aNorm === bNorm) return 0;

      if (bNorm == null) return -1;

      if (aNorm > bNorm) return direction === 'asc' ? 1 : -1;
      if (aNorm < bNorm) return direction === 'asc' ? -1 : 1;
      return 0;
    });
  }, [rows, columns, sortState]);

  return { sortedRows, sortState, toggleSort };
}
