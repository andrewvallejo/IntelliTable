import styles from './App.module.css';
import Table from './components/Table/Table';

export default function App() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Intellitable</h1>
      <Table />
    </main>
  );
}
