import { Component, Inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { toDateInputString } from '../../utils/date.util';

export interface CsvExportComponentData {
  export: (from?: string, until?: string) => void;
}

@Component({
  selector: 'frontend-csv-export',
  templateUrl: './csv-export.component.html',
  styleUrls: ['./csv-export.component.scss', '../../../assets/styles/dialog.scss'],
})
export class CsvExportComponent {
  form: UntypedFormGroup;
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: CsvExportComponentData
  ) {
    this.form = new UntypedFormGroup({
      fromTime: new UntypedFormControl(''),
      untilTime: new UntypedFormControl(toDateInputString(new Date())),
    });
  }

  onSubmit() {
    this.data.export(this.form.get('fromTime')?.value, this.form.get('untilTime')?.value);
  }
}
