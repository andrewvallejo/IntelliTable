// Table.tsx (IntelliTable)
import Layout from './Layout/Layout';
import type { ColumnMeta } from '@/types/column';
import { lazy, Suspense } from 'react';
import type { TableCell } from '@/types/cell';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Table = lazy(() => import('./Table/Table'));
const CardList = lazy(() => import('./CardList/CardList'));

export default function IntelliTable({
  headers,
  rows,
  columns,
}: {
  headers: string[];
  rows: TableCell[][];
  columns: ColumnMeta[];
}) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Layout>
      <Suspense fallback={null}>
        {isMobile ? (
          <CardList headers={headers} rows={rows} columns={columns} />
        ) : (
          <Table headers={headers} rows={rows} columns={columns} />
        )}
      </Suspense>
    </Layout>
  );
}
