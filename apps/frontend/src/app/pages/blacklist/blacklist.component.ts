import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { IBlacklist } from '@omnihost/interfaces';
import { ManagerAccessDialogComponent } from '../../components/manager-access-dialog/manager-access-dialog.component';
// import { BlacklistService } from '../../services/blacklist.service';

@Component({
  selector: 'frontend-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['../../../assets/styles/table.scss', '../../../assets/styles/checkbox.scss'],
})
export class BlacklistComponent implements OnInit {

}