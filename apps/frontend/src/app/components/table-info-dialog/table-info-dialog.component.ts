import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableInfoOptions } from '@omnihost/interfaces';
import { tableInfo, tableInfoObject } from './table-info.constant';

@Component({
  selector: 'frontend-table-info-dialog',
  templateUrl: './table-info-dialog.component.html',
  styleUrls: ['./table-info-dialog.component.scss', '../../../assets/styles/dialog.scss'],
})
export class TableInfoDialogComponent {
  displayInfo: tableInfoObject | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: TableInfoOptions) {
    this.displayInfo = tableInfo.find((table) => table.tableName === data);
  }
}
