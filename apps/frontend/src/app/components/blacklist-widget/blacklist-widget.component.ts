import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IBlacklist } from '@omnihost/interfaces';
import { UpdateBlacklistDialogComponent } from '../../pages/blacklist/update-blacklist-entry-dialog/update-blacklist-entry.component';
import { BlacklistService } from '../../services/blacklist.service';
import { ManagerAccessDialogComponent } from '../manager-access-dialog/manager-access-dialog.component';
@Component({
  selector: 'frontend-blacklist-widget',
  templateUrl: './blacklist-widget.component.html',
  styleUrls: ['./blacklist-widget.component.scss'],
})
export class BlacklistWidgetComponent implements OnInit {
  @Input() blacklist!: IBlacklist;

  files: string[] = [];
  isLoading = false;
  currentImage = 0;

  constructor(
    private blacklistService: BlacklistService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.getPictures();
  }

  openEditBlacklist(blacklist: IBlacklist): void {
    this.dialog.open(ManagerAccessDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        component: UpdateBlacklistDialogComponent,
        minWidth: '600px',
        disableClose: true,
        componentData: blacklist,
      },
    });
  }

  nextImage() {
    if (this.currentImage < this.files.length - 1) {
      this.currentImage++;
    } else {
      this.currentImage = 0;
    }
  }

  previousImage() {
    if (this.currentImage > 0) {
      this.currentImage--;
    } else {
      this.currentImage = this.files.length - 1;
    }
  }

  getPictures() {
    this.isLoading = true;
    this.blacklistService.getBlacklistById(this.blacklist.blacklistId).subscribe({
      next: (blacklist) => {
        this.files = blacklist.downloadUrls;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.snackBar.open('Failed to load some images', 'Okay', {
          duration: 10000,
        });
      },
    });
  }

  displayName() {
    if (this.blacklist.name !== undefined) {
      if (this.blacklist.name?.length > 27) {
        return this.blacklist.name?.substring(0, 24) + '...';
      }
    }
    return this.blacklist.name;
  }

  displayPictures() {
    return this.blacklistService.getBlacklistById(this.blacklist.blacklistId);
  }
}
