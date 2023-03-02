import { saveAs } from 'file-saver';

export const downloadCsv = <T extends object>(
  itemList: T[],
  headers?: string[],
  filename?: string
) => {
  const replacer = (_: any, value: any) => (value === null ? '' : value);
  const header = Object.keys(itemList[0]);
  const exportHeader = headers || header;
  const csv = itemList.map((row) =>
    header.map((fieldName) => JSON.stringify(row[fieldName], replacer)).join(',')
  );
  csv.unshift(exportHeader.join(','));
  const csvArray = csv.join('\r\n');

  const blob = new Blob([csvArray], { type: 'text/csv' });
  saveAs(blob, `${filename}.csv` || 'export-data.csv');
};
