export function toDateInputString(date: Date) {
  return date.toISOString().split('T')[0];
}

export function toDateObject(date: string) {
  return new Date(date);
}
