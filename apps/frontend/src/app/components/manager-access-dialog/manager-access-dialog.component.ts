import { ComponentType } from '@angular/cdk/portal';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'frontend-manager-access-dialog',
  templateUrl: './manager-access-dialog.component.html',
  styleUrls: ['./manager-access-dialog.component.scss', '../../../assets/styles/dialog.scss'],
})
export class ManagerAccessDialogComponent {
  dialogData;
  managerAccessForm = new UntypedFormGroup({});
  errorMessage: string | null;
  isLoading = false;

  @ViewChild('password') passwordInput!: ElementRef;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    public dialogRef: MatDialogRef<ManagerAccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { component?: ComponentType<unknown>; width: string }
  ) {
    this.dialogData = data;
    this.isLoading = false;
    this.errorMessage = null;
    this.managerAccessForm = new UntypedFormGroup({
      password: new UntypedFormControl(null, [Validators.required, Validators.maxLength(100)]),
    });
  }

  onSubmit() {
    if (!this.managerAccessForm.valid) {
      if (this.managerAccessForm.get('password')?.invalid) {
        this.passwordInput.nativeElement.focus();
      }
    } else {
      this.login();
    }
  }

  login() {
    this.isLoading = true;
    this.managerAccessForm.disable();
    this.authService
      .login({
        email: this.authService.getAccessInfo()?.user.email + '-mgmt',
        password: this.managerAccessForm.get('password')?.value,
      })
      .subscribe({
        next: (response) => {
          this.authService.saveManagerInfo(response);
          // Clean the form
          this.isLoading = false;
          this.managerAccessForm.enable();
          this.errorMessage = null;
          // Open the target dialog if it is specified
          if (this.dialogData && this.dialogData.component) {
            this.dialog.open(this.dialogData.component, {
              width: this.dialogData.width,
              data: { managerAccessRequired: true },
            });
          }
          this.dialogRef.close();
        },
        error: (error) => {
          console.warn(error);
          this.isLoading = false;
          this.errorMessage = 'Access denied';
          this.managerAccessForm.get('password')?.setValue(null);
          this.managerAccessForm.enable();
          this.passwordInput.nativeElement.focus();
        },
      });
  }
}
