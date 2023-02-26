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
  styleUrls: ['./view-images-dialog.component.scss'],
})
export class ViewImagesDialogComponent {
  images: string[] = [];
  videos: string[] = [];
  entity: IGetLuggageByIdResponse | IGetCarByIdResponse | IGetAnnouncementByIdResponse | undefined;
  text: undefined | string = undefined;
  isLoading = true;
  title = '';

  constructor(
    private luggageService: LuggageService,
    private carsService: CarService,
    private announcementsService: AnnouncementsService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: ILuggage | ICar | IAnnouncement
  ) {
    this.fetchEntity();    
    if(Object.keys(data).includes('announcementId')) {
      this.text = data.comments
    }
  }

  fetchEntity() {
    this.isLoading = true;
    if (Object.prototype.hasOwnProperty.call(this.data, 'luggageId')) {
      this.title = `Luggage - ${(this.data as ILuggage).name}`;
      this.luggageService.getById((this.data as ILuggage).luggageId).subscribe({
        next: (response) => this.processObservableResponse(response),
        error: (error) => this.processObservableError(error),
      });
      return;
    }
    if (Object.prototype.hasOwnProperty.call(this.data, 'carId')) {
      this.title = `Car - ${(this.data as ICar).licensePlate}`;
      this.carsService.getById((this.data as ICar).carId).subscribe({
        next: (response) => this.processObservableResponse(response),
        error: (error) => this.processObservableError(error),
      });
      return;
    }
    if (Object.prototype.hasOwnProperty.call(this.data, 'announcementId')) {
      this.title = `Announcement - ${(this.data as IAnnouncement).title}`;
      this.announcementsService.getById((this.data as IAnnouncement).announcementId).subscribe({
        next: (response) => this.processObservableResponse(response),
        error: (error) => this.processObservableError(error),
      });
      return;
    }
    SentryService.logEvent({
      message: 'View images dialog - Unable to match entity with the provided data',
      level: 'error',
    });
    this.snackBar.open('Failed to process the files. Please try again later.', 'Okay', {
      duration: 10000,
    });
    this.title = 'Unknown data';
    this.isLoading = false;
  }

  processObservableResponse(
    response: IGetLuggageByIdResponse | IGetCarByIdResponse | IGetAnnouncementByIdResponse
  ) {
    this.entity = response;
    this.images = this.filterImages(response.downloadUrls);
    this.videos = this.filterVideos(response.downloadUrls);
    this.isLoading = false;
  }

  processObservableError(error: HttpErrorResponse) {
    SentryService.logError(error);
    this.snackBar.open('Files has failed to load, please try checking your connection.', 'Okay', {
      duration: 10000,
    });
    this.isLoading = false;
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
      return matches[0].replaceAll('/', '').replaceAll('?Signature', '');
    } else {
      return '';
    }
  }
}
