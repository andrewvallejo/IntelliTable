// Table.tsx
import Layout from './Layout/Layout';
import { formatDataToTableFormat, getRandomTableData } from '@/utils/tableData';
import { lazy, Suspense } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Table = lazy(() => import('./Table/Table'));
const CardList = lazy(() => import('./CardList/CardList'));

export default function IntelliTable() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const { headers, rows } = formatDataToTableFormat(getRandomTableData(10));

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
