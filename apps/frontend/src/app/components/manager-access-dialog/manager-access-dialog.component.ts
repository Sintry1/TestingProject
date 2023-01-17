import { ComponentType } from '@angular/cdk/portal';
import { Component, Inject } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'frontend-manager-access-dialog',
  templateUrl: './manager-access-dialog.component.html',
  styleUrls: ['./manager-access-dialog.component.scss', '../../../assets/styles/dialog.scss'],
})
export class ManagerAccessDialogComponent {
  nextDialogInfo: { component: ComponentType<unknown>; width: string };
  managerAccessForm = new UntypedFormGroup({});
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<ManagerAccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { component: ComponentType<unknown>; width: string }
  ) {
    this.nextDialogInfo = data;
  }

  onSubmit() {
    this.dialog.open(this.nextDialogInfo.component, { width: this.nextDialogInfo.width });
    this.dialogRef.close();
  }
}
