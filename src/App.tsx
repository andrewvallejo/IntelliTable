import IntelliTable from './components/IntelliTable/IntelliTable';
import styles from './App.module.css';
import { formatDataToTableFormat, getRandomTableData } from './utils/tableData';
import { useMemo } from 'react';

export default function App() {
  const { headers, rows } = useMemo(
    () => formatDataToTableFormat(getRandomTableData(10)),
    []
  );

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>IntelliTable</h1>
      <IntelliTable headers={headers} rows={rows} />
    </main>
  );
}
