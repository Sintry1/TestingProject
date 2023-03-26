import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';

export function valueNotFutureValidator(): AsyncValidatorFn {
  return async (control: AbstractControl): Promise<ValidationErrors | null> => {
    const value = new Date(control.value);
    let future = new Date();
    future = new Date(future.setMinutes(future.getMinutes() + 1));

    if (!value) {
      return null;
    }

    if (value < future) {
      return null;
    }

    // Return a validation error
    return { valueInFuture: true };
  };
}
