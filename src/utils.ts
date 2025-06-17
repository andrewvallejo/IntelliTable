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
