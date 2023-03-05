interface IDateParts {
  day: string | number;
  month: string | number;
  year: number;
  hour: string | number;
  minute: string | number;
}

export function toTimeInputString(date: Date) {
  const { hour, minute } = getDateParts(date);
  const timeString = `${hour}:${minute}`;

  return timeString;
}

export function toDateInputString(date: Date) {
  const { day, month, year } = getDateParts(date);
  const dateString = `${year}-${month}-${day}`;

  return dateString;
}

export function toDatetimeInputString(date: Date) {
  const { day, month, year, hour, minute } = getDateParts(date);
  const datetimeString = `${year}-${month}-${day}T${hour}:${minute}`;

  return datetimeString;
}

export function toExportString(date: Date) {
  const { day, month, year, hour, minute } = getDateParts(date);
  const exportString = `${day}/${month}/${year} ${hour}:${minute}`;

  return exportString;
}

export function toDateObject(date: string) {
  if (!isTimeString(date)) {
    return new Date(date);
  }

  const timeParts = date.split(':');
  const newDate = new Date();
  newDate.setHours(Number(timeParts[0]), Number(timeParts[1]));

  return newDate;
}

function getDateParts(date: Date): IDateParts {
  return {
    day: toDoubleDigit(date.getDate()),
    month: toDoubleDigit(date.getMonth() + 1),
    year: date.getFullYear(),
    hour: toDoubleDigit(date.getHours()),
    minute: toDoubleDigit(date.getMinutes()),
  };
}

function toDoubleDigit(number: number) {
  if (number >= 10) {
    return number;
  }

  return `0${number}`;
}

function isTimeString(string: string) {
  return string.includes(':') && !string.includes('-');
}
