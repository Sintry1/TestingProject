import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IBlacklist } from '@omnihost/interfaces';
import { BlacklistService } from '../../services/blacklist.service';

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
        this.snackBar.open('Blacklist has failed to load', 'Okay', {
          duration: 10000,
        });
        this.isLoading = false;
      },
    });
  }
}
