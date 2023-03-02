import { IBike } from '@omnihost/interfaces';
import { saveAs } from 'file-saver';

export const downloadCsv = (bikeList: IBike[], headers?: string[], filename?: string) => {
  const replacer = (_: any, value: any) => (value === null ? '' : value);
  const header = Object.keys(bikeList[0]);
  const exportHeader = headers || header;
  const csv = bikeList.map((row) =>
    header.map((fieldName) => JSON.stringify(row[fieldName], replacer)).join(',')
  );
  csv.unshift(exportHeader.join(','));
  const csvArray = csv.join('\r\n');

  const blob = new Blob([csvArray], { type: 'text/csv' });
  saveAs(blob, `${filename}.csv` || 'export-data.csv');
};
