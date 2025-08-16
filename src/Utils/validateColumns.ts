// utils/validateColumns.ts
import type { ColumnMeta } from '@/types/column';

export function validateColumns(
  columns: ColumnMeta[] | undefined,
  headers?: string[]
) {
  if (process.env.NODE_ENV === 'production') return;
  if (!columns) {
    console.warn('[IntelliTable] No columns metadata provided.');
    return;
  }

  columns.forEach((c, i) => {
    if (!c?.key)
      console.error(`[IntelliTable] columns[${i}] is missing "key".`, c);
    if (!c?.type)
      console.error(
        `[IntelliTable] columns[${i}] is missing "type". key=${String(c?.key)}`
      );
  });

  if (headers && columns.length !== headers.length) {
    console.warn(
      `[IntelliTable] columns.length (${columns.length}) != headers.length (${headers.length}).` +
        ` Header labels may misaligned with cells.`
    );
  }
}
