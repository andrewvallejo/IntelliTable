import type { Data } from '@/types/table';
import type { TableCell } from '@/types/cell';
import { tableData } from '@/assets/mockData';

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

export const formatDataToTableFormat = <T extends object>(data: T[]) => {
  const keys = Object.keys(data[0]).map((key) => {
    // If camelCase and starts with "Is", omit "Is"
    if (/^is[A-Z]/.test(key)) {
      key = key.replace(/^is/, '');
    }
    // Convert camelCase to Title Case
    key = key.replace(/([a-z])([A-Z])/g, '$1 $2');
    // Convert snake_case to Title Case
    key = key.replace(/_/g, ' ');
    // Convert kebab-case to Title Case
    key = key.replace(/-/g, ' ');
    // Convert PascalCase to Title Case
    key = key.replace(/([a-z])([A-Z])/g, '$1 $2');
    // Convert UPPER_CASE to Title Case
    key = key
      .replace(/_/g, ' ')
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    return key;
  });

  const values = data.map((item) => Object.values(item));
  // iterate through each value and check for type (bool, number, etc)

  return { headers: keys, rows: values };
};

export const formatCamelCaseToTitle = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
};
export const extractType = (value: unknown): string => {
  if (typeof value === 'boolean') {
    return 'boolean';
  } else if (typeof value === 'number') {
    return 'number';
  } else if (typeof value === 'string') {
    return 'string';
  } else if (Array.isArray(value)) {
    return 'array';
  } else if (value instanceof Date) {
    return 'date';
  } else if (value && typeof value === 'object') {
    return 'object';
  }
  return 'unknown';
};

export const renderValue = (value: TableCell): React.ReactNode => {
  if (value instanceof Date) return value.toLocaleString();
  return Array.isArray(value) ? value.join(', ') : value;
};
