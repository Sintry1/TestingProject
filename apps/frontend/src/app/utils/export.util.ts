import { saveAs } from 'file-saver';
import { toExportString } from './date.util';

export const downloadCsv = <T extends object>(
  itemList: T[],
  headers?: string[],
  unwantedFields?: string[],
  filename?: string
) => {
  const replacer = (_: any, value: any) => (value === null ? '' : value);
  const header = Object.keys(itemList[0]).filter((field) => {
    return !unwantedFields?.includes(field);
  });
  const exportHeader = headers || header;
  const csv = itemList.map((row) =>
    header
      .map((fieldName) => {
        let value = row[fieldName];
        if (
          typeof value == 'string' &&
          !isNaN(Date.parse(value)) &&
          value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
        ) {
          value = toExportString(new Date(value));
        }
        return JSON.stringify(value, replacer);
      })
      .join(';')
  );
  csv.unshift(exportHeader.join(';'));
  const csvArray = csv.join('\r\n');

  const blob = new Blob([csvArray], { type: 'text/csv' });
  saveAs(blob, `${filename}.csv` || 'export-data.csv');
};
