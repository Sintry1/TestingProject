import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { IBlacklist, IGetBlacklistByIdResponse } from '@omnihost/interfaces';
import { BlacklistService } from '../../../services/blacklist.service';

@Component({
  selector: 'frontend-see-blacklist-dialog',
  templateUrl: './see-blacklist-dialog.component.html',
  styleUrls: ['../../../../assets/styles/dialog.scss', './see-blacklist-dialog.component.scss'],
})
export class SeeBlacklistDialogComponent implements OnInit {
  blacklist?: IBlacklist;
  blacklistFileUrl?: SafeUrl;
  isLoading = true;

  constructor(
    private blacklistService: BlacklistService,
    private snackBar: MatSnackBar,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public blacklistId: string
  ) {}

  ngOnInit(): void {
    this.fetchBlacklist();
  }

  fetchBlacklist(): void {
    this.isLoading = true;
    this.blacklistService.getBlacklistById(this.blacklistId).subscribe({
      next: (blacklist) => {
        this.blacklist = blacklist;
      },
      error: (error) => {
        console.error(error);
        this.snackBar.open('The Blacklist has failed to load', 'Okay', {
          duration: 10000,
        });
      },
    });
  }

  // fetchBlacklistFile(url: string): void {
  //   this.blacklistService.getBlacklistFile(url).subscribe({
  //     next: (blacklistFile) => {
  //       const blacklistBlob = new Blob([blacklistFile], {
  //         type: 'application/pdf',
  //       });
  //       this.blacklistFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
  //         URL.createObjectURL(blacklistBlob)
  //       );
  //       this.isLoading = false;
  //     },
  //     error: (error) => {
  //       console.error(error);
  //       this.snackBar.open('The Blacklist File has failed to load', 'Okay', {
  //         duration: 10000,
  //       });
  //     },
  //   });
  // }
}
