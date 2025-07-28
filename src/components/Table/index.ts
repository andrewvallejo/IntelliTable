import Row from './Row';
import TableComponent from './Table';
import { Cell } from './IntelliCell';

export const Table = Object.assign(TableComponent, {
  Row,
  Cell,
});

export default Table;
