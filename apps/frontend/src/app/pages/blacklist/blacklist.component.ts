import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IBlacklist } from '@omnihost/interfaces';
import { ManagerAccessDialogComponent } from '../../components/manager-access-dialog/manager-access-dialog.component';
import { BlacklistService } from '../../services/blacklist.service';
import { CreateBlacklistDialogComponent } from './create-blacklist-entry-dialog/create-blacklist-entry.component';

@Component({
  selector: 'frontend-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: [
    '../../../assets/styles/table.scss',
    '../../../assets/styles/checkbox.scss',
    'blacklist.component.scss',
  ],
})
export class BlacklistComponent implements OnInit {
  blacklistList: IBlacklist[] = [];
  search = '';
  isLoading = false;

  constructor(
    private blacklistService: BlacklistService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchBlacklist();
  }

  fetchBlacklist(): void {
    this.isLoading = true;

    this.blacklistService.getBlacklist().subscribe({
      next: (blacklist) => {
        this.blacklistList = blacklist;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.snackBar.open(
          'Unwanted guests have failed to load. Please check your connection and reload the page.',
          'Okay',
          {
            duration: 10000,
          }
        );
        this.isLoading = false;
      },
    });
  }

  openCreateBlacklistDialog(): void {
    this.dialog.open(ManagerAccessDialogComponent, {
      width: '400px',
      data: {
        component: CreateBlacklistDialogComponent,
        minWidth: '600px',
      },
    });
  }
}
