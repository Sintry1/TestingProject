import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, OnDestroy, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { ExportService } from '../../services/export.service';
import { SentryService } from '../../services/sentry.service';
import { toDateInputString } from '../../utils/date.util';
import { ManagerAccessDialogComponent } from '../manager-access-dialog/manager-access-dialog.component';

export interface CsvExportComponentData {
  managerAccessRequired: boolean;
  componentData: {
    tableName: string;
    columns: { fieldName: string; displayName: string }[];
  };
}

@Component({
  selector: 'frontend-csv-export',
  templateUrl: './csv-export.component.html',
  styleUrls: ['./csv-export.component.scss', '../../../assets/styles/dialog.scss'],
})
export class CsvExportComponent implements OnDestroy {
  form: UntypedFormGroup;
  isLoading = false;

  @ViewChild('email') emailInput!: ElementRef;
  @ViewChild('fromDate') fromDateInput!: ElementRef;
  @ViewChild('toDate') toDateInput!: ElementRef;

  constructor(
    private exportService: ExportService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: CsvExportComponentData
  ) {
    this.form = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      fromDate: new UntypedFormControl('', [Validators.required]),
      toDate: new UntypedFormControl(toDateInputString(new Date()), [Validators.required]),
    });
  }

  ngOnDestroy() {
    this.authService.removeManagerInfo();
  }

  onSubmit() {
    if (!this.form.valid) {
      if (this.form.get('email')?.invalid) {
        this.emailInput.nativeElement.focus();
      } else if (this.form.get('fromDate')?.invalid) {
        this.fromDateInput.nativeElement.focus();
      } else if (this.form.get('toDate')?.invalid) {
        this.toDateInput.nativeElement.focus();
      }
    } else if (
      new Date(this.form.get('fromDate')?.value) > new Date(this.form.get('toDate')?.value)
    ) {
      this.snackBar.open(
        `The 'from' date can't be before the 'until' date!`,
        'Okay, I will change it',
        {
          duration: 15000,
        }
      );
      this.fromDateInput.nativeElement.focus();
    } else {
      // Check if manager access is present and valid
      const managerInfo = this.authService.getManagerInfo();
      if (!managerInfo || this.authService.isJwtExpired(managerInfo.accessToken)) {
        console.warn('Manager access has expired, re-prompting for password');
        const managerDialogRef = this.dialog.open(ManagerAccessDialogComponent, {
          width: '400px',
          disableClose: true,
        });
        // Once the manager access dialog is closed, re-submit the form and check the logic again
        managerDialogRef.afterClosed().subscribe({
          next: () => {
            this.onSubmit();
          },
        });
        return;
      }
      // Manager access information is correct, perform the action
      this.exportData();
    }
  }

  exportData() {
    this.isLoading = true;
    this.form.disable();

    this.exportService
      .exportData(this.data.componentData.tableName, {
        email: this.form.get('email')?.value,
        from: this.form.get('fromDate')?.value,
        to: this.form.get('toDate')?.value,
        mappingParams: this.data.componentData.columns.map((column) => {
          return { fieldName: column.fieldName, exportName: column.displayName };
        }),
      })
      .subscribe({
        next: () => {
          this.snackBar.open(
            `Data for table '${this.data.componentData.tableName}' has been exported and sent by email`,
            '',
            {
              duration: 5000,
            }
          );
          this.authService.removeManagerInfo();
          this.dialog.closeAll();
          this.isLoading = false;
          this.form.enable();
        },
        error: (error: HttpErrorResponse) => {
          SentryService.logError(error);
          this.snackBar.open(error.error.message, 'Okay', {
            duration: 15000,
          });
          this.isLoading = false;
          this.form.enable();
        },
      });
  }
}
