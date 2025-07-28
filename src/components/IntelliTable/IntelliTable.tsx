// Table.tsx
import Layout from './Layout/Layout';
import { lazy, Suspense } from 'react';
import type { TableCell } from '@/types/table';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Table = lazy(() => import('./Table/Table'));
const CardList = lazy(() => import('./CardList/CardList'));

export default function IntelliTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: TableCell[][];
}) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Layout>
      <Suspense fallback={null}>
        {isMobile ? (
          <CardList headers={headers} rows={rows} />
        ) : (
          <Table headers={headers} rows={rows} />
        )}
      </Suspense>
    </Layout>
  );
}
