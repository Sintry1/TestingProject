import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { toDateObject } from '../date.util';

export function valueNotFutureValidator(): AsyncValidatorFn {
  return async (control: AbstractControl): Promise<ValidationErrors | null> => {
    if (!control.value) {
      return null;
    }
    const value = toDateObject(control.value);
    let future = new Date();
    future = new Date(future.setMinutes(future.getMinutes() + 1));

    if (value < future) {
      return null;
    }

    // Return a validation error
    return { valueInFuture: true };
  };
}
