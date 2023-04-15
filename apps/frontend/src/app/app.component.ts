import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, Router } from '@angular/router';
import { AnnouncementSortOptions, SortOrder } from '@omnihost/interfaces';
import { AnnouncementsService } from './services/announcements.service';
import { AuthService } from './services/auth.service';
import { DisplayDateService } from './services/display-date.service';
import { SentryService } from './services/sentry.service';
import { toDateInputString, toDateObject } from './utils/date.util';

@Component({
  selector: 'frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Omnihost Systems';
  sidebarCollapsed = true;
  displayDate = toDateInputString(new Date());
  newNotifications = 0;

  constructor(
    public router: Router,
    private displayDateService: DisplayDateService,
    private authService: AuthService,
    private announcementService: AnnouncementsService,
    private snackBar: MatSnackBar
  ) {
    this.displayDateService
      .getDisplayDateSubject()
      .subscribe((date) => (this.displayDate = toDateInputString(new Date(date))));

    this.fetchAnnouncements();

    this.router.events.subscribe(async (val) => {
      if (val instanceof NavigationEnd) {
        switch (this.router.url) {
          case '/dashboard':
            this.title = 'Dashboard';
            break;
          case '/account':
            this.title = 'Account';
            break;
          case '/luggage-list':
            this.title = 'Luggage List';
            break;
          case '/car-list':
            this.title = 'Car List';
            break;
          case '/checkin':
            this.title = 'Check In';
            break;
          case '/checkout':
            this.title = 'Check Out';
            break;
          case '/daily-tasks':
            this.title = 'Daily Tasks';
            break;
          case '/assignments':
            this.title = 'Bell Boy Assignment Sheet';
            break;
          case '/bikes':
            this.title = 'Bike Sheet';
            break;
          case '/long-term':
            this.title = 'Long Term';
            break;
          case '/documents':
            this.title = 'Documents';
            break;
          case '/unwanted':
            this.title = 'Unwanted guests';
            break;
          case '/announcements':
            this.title = 'Announcements';
            break;
          default:
            this.title = 'Page Not Found';
            break;
        }
      }
    });
  }

  /**
   * Fetch the announcements and filter how many are fresh (less than 24 hours old)
   */
  fetchAnnouncements() {
    this.announcementService
      .getAnnouncements(AnnouncementSortOptions.SHOW_FROM, SortOrder.ASCENDING, '')
      .subscribe({
        next: (announcements) => {
          const yesterday = new Date(Date.now());
          yesterday.setTime(yesterday.getTime() - 24 * 60 * 60 * 1000); // day before now

          this.newNotifications = announcements.filter((announcement) => {
            if (!announcement.showFrom) {
              return false;
            }
            const from = toDateObject(announcement.showFrom.toString());
            return (
              from.getTime() < new Date(Date.now()).getTime() &&
              from.getTime() > yesterday.getTime()
            );
          }).length;
        },
        error: (error) => {
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

  /**
   * Toggles the `sidebarCollapsed` boolean.
   */
  toggleCollapsed(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  /**
   * Remove the logged in user information from local storage and API
   */
  logout() {
    this.authService.logout();
    this.snackBar.open('You have logged out', undefined, {
      duration: 5000,
    });
  }

  onDisplayDateChange(date: string) {
    this.displayDate = date;
    this.displayDateService.setDisplayDate(toDateObject(date));
  }
}
