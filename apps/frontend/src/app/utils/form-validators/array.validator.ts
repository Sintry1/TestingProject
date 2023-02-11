import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';

export function valueInArrayValidator(array: string[]): AsyncValidatorFn {
  return async (control: AbstractControl): Promise<ValidationErrors | null> => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (array.includes(value)) {
      return null;
    }

    // Return a validation error
    return { valueMissingFromArray: true };
  };
}
