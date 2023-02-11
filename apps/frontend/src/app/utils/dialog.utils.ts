import { AbstractControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

/**
 * Connect to the given autocomplete form control and filter out the options.
 * @param options the available options.
 * @param formControl the form control reference.
 * @example
    this.filteredOptions = filterAutocompleteSelect( this.optionsArray, this.exampleForm.get('controlName') );
 * @returns an observable that will automatically filter out the options.
 */
export function filterAutocompleteSelect(
  options: string[],
  formControl: AbstractControl | null
): Observable<string[]> {
  if (formControl == null) {
    return new Observable<string[]>();
  }
  return (
    formControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? filterArray(name as string, options) : options.slice();
      })
    ) || new Observable<string[]>()
  );
}

function filterArray(name: string, options: string[]): string[] {
  const filterValue = name.toLowerCase();

  return options.filter((option) => option.toLowerCase().includes(filterValue));
}
