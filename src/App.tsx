import IntelliTable from './components/IntelliTable/IntelliTable';
import styles from './App.module.css';
import { columnMeta } from './assets/mockData';
import { formatDataToTableFormat, getRandomTableData } from './utils/tableData';
import { useEffect, useMemo } from 'react';
import { validateColumns } from './utils/validateColumns';

export default function App() {
  const { headers, rows } = useMemo(
    () => formatDataToTableFormat(getRandomTableData(10)),
    []
  );

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      validateColumns(columnMeta, headers);
    }
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>IntelliTable</h1>
      <IntelliTable headers={headers} rows={rows} columns={columnMeta} />
    </main>
  );
}
