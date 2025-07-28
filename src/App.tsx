import IntelliTable from './components/IntelliTable/IntelliTable';
import styles from './App.module.css';

export default function App() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>IntelliTable</h1>
      <IntelliTable />
    </main>
  );
}
