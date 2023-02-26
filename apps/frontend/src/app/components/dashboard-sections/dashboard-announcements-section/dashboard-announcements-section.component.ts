import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnnouncementSortOptions, IAnnouncement, SortOrder } from '@omnihost/interfaces';
import { AnnouncementsService } from '../../../services/announcements.service';
import { SentryService } from '../../../services/sentry.service';
import { ViewImagesDialogComponent } from '../../view-images-dialog/view-images-dialog.component';

@Component({
  selector: 'frontend-dashboard-announcements-section',
  templateUrl: './dashboard-announcements-section.component.html',
  styleUrls: ['../../../../assets/styles/dashboard-section.scss'],
})
export class DashboardAnnouncementsSectionComponent implements OnInit {
  announcementList: IAnnouncement[] = [];
  isLoading = true;
  sortBy: AnnouncementSortOptions = AnnouncementSortOptions.CREATED_AT;
  sortOrder: SortOrder = SortOrder.ASCENDING;
  search = '';

  constructor(
    private dialog: MatDialog, 
    private snackBar: MatSnackBar,
    private announcementService: AnnouncementsService,
  ) {
  }

  ngOnInit(): void {
    this.fetchAnnouncements();
  }

  fetchAnnouncements(): void {
    this.isLoading = true;
    this.announcementService.getAnnouncements(this.sortBy, this.sortOrder, this.search).subscribe({
      next: (announcements) => {
        this.announcementList = announcements;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        SentryService.logError(error);
        this.snackBar.open(
          'Announcement data has failed to load, please try checking your connection.',
          'Okay',
          {
            duration: 10000,
          }
        );
      },
    });
  }

  viewFiles(element: IAnnouncement) {
    if (element.files.length > 0) {
      this.dialog.open(ViewImagesDialogComponent, {
        width: '600px',
        disableClose: true,
        data: element,
      });
    }
  }

  displayTitle(title: string | undefined) {
    if (title && title.length > 23) {
      return title.substring(0, 20) + '...';
    } else {
      return title;
    }
  }
}
