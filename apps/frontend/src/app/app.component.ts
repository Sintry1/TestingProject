import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { DisplayDateService } from './services/display-date.service';
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

  constructor(
    public router: Router,
    private displayDateService: DisplayDateService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.displayDateService
      .getDisplayDateSubject()
      .subscribe((date) => (this.displayDate = toDateInputString(new Date(date))));

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
