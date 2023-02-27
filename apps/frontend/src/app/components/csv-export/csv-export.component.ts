import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'frontend-csv-export',
  templateUrl: './csv-export.component.html',
  styleUrls: ['./csv-export.component.scss', '../../../assets/styles/dialog.scss'],
})
export class CsvExportComponent {
  form: UntypedFormGroup;
  isLoading = false;

  constructor() {
    this.form = new UntypedFormGroup({});
  }

  onSubmit() {
    return;
  }
}
