import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  IAnnouncement,
  ICar,
  IGetAnnouncementByIdResponse,
  IGetCarByIdResponse,
  IGetLuggageByIdResponse,
  ILuggage,
} from '@omnihost/interfaces';
import { AnnouncementsService } from '../../services/announcements.service';
import { CarService } from '../../services/car.service';
import { LuggageService } from '../../services/luggage.service';
import { SentryService } from '../../services/sentry.service';

@Component({
  selector: 'frontend-view-images-dialog',
  templateUrl: './view-images-dialog.component.html',
  styleUrls: ['./view-images-dialog.component.scss', '../../../assets/styles/dialog.scss'],
})
export class ViewImagesDialogComponent {
  images: string[] = [];
  videos: string[] = [];
  entity: IGetLuggageByIdResponse | IGetCarByIdResponse | IGetAnnouncementByIdResponse | undefined;
  isLoading = true;

  constructor(
    private luggageService: LuggageService,
    private carsService: CarService,
    private announcementsService: AnnouncementsService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: ILuggage | ICar | IAnnouncement
  ) {
    console.log('data', data);
    this.fetchEntity();
  }

  fetchEntity() {
    this.isLoading = true;
    switch (this.getTitle()) {
      case 'Luggage': {
        this.luggageService.getById((this.data as ILuggage).luggageId).subscribe({
          next: (response) => this.processObservableResponse(response),
          error: (error) => this.processObservableError(error),
        });
        break;
      }
      case 'Car': {
        this.carsService.getById((this.data as ICar).carId).subscribe({
          next: (response) => this.processObservableResponse(response),
          error: (error) => this.processObservableError(error),
        });
        break;
      }
      case 'Announcement': {
        this.announcementsService.getById((this.data as IAnnouncement).announcementId).subscribe({
          next: (response) => this.processObservableResponse(response),
          error: (error) => this.processObservableError(error),
        });
        break;
      }
    }
  }

  processObservableResponse(
    response: IGetLuggageByIdResponse | IGetCarByIdResponse | IGetAnnouncementByIdResponse
  ) {
    console.log('response', response);
    this.entity = response;
    this.images = this.filterImages(response.downloadUrls);
    this.videos = this.filterVideos(response.downloadUrls);
    this.isLoading = false;
  }

  processObservableError(error: HttpErrorResponse) {
    SentryService.logError(error);
    this.snackBar.open(
      'Check Out data have failed to load, please try checking your connection.',
      'Okay',
      {
        duration: 10000,
      }
    );
    this.isLoading = false;
  }

  getTitle(): string {
    if (Object.prototype.hasOwnProperty.call(this.data, 'luggageId')) {
      return 'Luggage';
    }

    if (Object.prototype.hasOwnProperty.call(this.data, 'carId')) {
      return 'Car';
    }

    if (Object.prototype.hasOwnProperty.call(this.data, 'announcementId')) {
      return 'Announcement';
    }
    SentryService.logEvent({
      message: 'Tried to display files for an unknown entity!',
      level: 'warning',
    });
    return 'Unknown';
  }

  filterImages(urls: string[]): string[] {
    return urls.filter((url) => {
      const file = this.getExtensionFromSignedUrl(url);
      return file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg');
    });
  }
  filterVideos(urls: string[]): string[] {
    return urls.filter((url) => {
      const file = this.getExtensionFromSignedUrl(url);
      return file.endsWith('.mp4') || file.endsWith('.mov');
    });
  }

  getExtensionFromSignedUrl(url: string): string {
    // Extract the file from the url
    const matches = url.match(/\/[\w.%\d\-_]*\?Signature/gm);

    if (matches && matches.length > 0) {
      // Return the trimmed file
      return matches[0].replace('/', '').replace('?Signature', '');
    } else {
      return '';
    }
  }
}
