/**
 * This class is meant to be extend with when the given component used a autocomplete select field.
 * @example export class CreateAssignmentDialogComponent extends DropdownSelection
 */
export class DropdownSelection {
  /**
   * Returns a generic error message for the autocomplete select fields.
   * @example <mat-error> {{ getErrorMessage() }} </mat-error>
   * @return a generic error message;
   */
  getErrorMessage(): string {
    return 'Has to be one of the presented values';
  }
}
