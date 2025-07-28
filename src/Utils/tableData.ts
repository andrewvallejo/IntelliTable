import type { Data } from '../types/table';
import { tableData } from '../assets/mockData';

/**
 * Returns a sliced subset of the table data.
 *
 * @param count - The number of rows to return. If not provided, all rows are returned.
 * @returns An array of `Data` rows from the top of the dataset.
 */
export const getTableData = (count?: number): Data[] => {
  return count ? tableData.slice(0, Math.max(0, count)) : tableData;
};

/**
 * Returns a randomly shuffled subset of the table data.
 *
 * @param count - The number of rows to return. Must be a positive integer.
 * @returns An array of randomly ordered `Data` rows from the dataset.
 */
export const getRandomTableData = (count: number): Data[] => {
  const entries = [...getTableData()];
  return entries.sort(() => Math.random() - 0.5).slice(0, Math.max(0, count));
};
