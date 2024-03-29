import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Sentry from '@sentry/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlacklistWidgetComponent } from './components/blacklist-widget/blacklist-widget.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { CsvExportComponent } from './components/csv-export/csv-export.component';
import { DashboardAnnouncementsSectionComponent } from './components/dashboard-sections/dashboard-announcements-section/dashboard-announcements-section.component';
import { DashboardDocumentSectionComponent } from './components/dashboard-sections/dashboard-document-section/dashboard-document-section.component';
import { DashboardNotificationSectionComponent } from './components/dashboard-sections/dashboard-notification-section/dashboard-notification-section.component';
import { DashboardLinksComponent } from './components/dashboard-widgets/dashboard-links/dashboard-links.component';
import { DocumentWidgetComponent } from './components/dashboard-widgets/document-widget/document-widget.component';
import { SeeDocumentDialogComponent } from './components/dashboard-widgets/document-widget/see-document-dialog/see-document-dialog.component';
import { BikeNotificationWidgetComponent } from './components/dashboard-widgets/notification-widgets/bike-notification-widget/bike-notification-widget.component';
import { CarNotificationWidgetComponent } from './components/dashboard-widgets/notification-widgets/car-notification-widget/car-notification-widget.component';
import { CheckinCheckoutNotificationWidgetComponent } from './components/dashboard-widgets/notification-widgets/checkin-checkout-notification-widget/checkin-checkout-notification-widget.component';
import { TasksNotificationWidgetComponent } from './components/dashboard-widgets/notification-widgets/tasks-notification-widget/tasks-notification-widget.component';
import { WeatherWidgetComponent } from './components/dashboard-widgets/weather-widget/weather-widget.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ManagerAccessDialogComponent } from './components/manager-access-dialog/manager-access-dialog.component';
import { TableInfoDialogComponent } from './components/table-info-dialog/table-info-dialog.component';
import { ViewFilesDialogComponent } from './components/view-files-dialog/view-files-dialog.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { materialModules } from './material.constant';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { CreateAnnouncementDialogComponent } from './pages/announcements/create-announcement-dialog/create-announcement-dialog.component';
import { UpdateAnnouncementDialogComponent } from './pages/announcements/update-announcement-dialog/update-announcement-dialog.component';
import { AssignmentsComponent } from './pages/assignments/assignments.component';
import { CreateAssignmentDialogComponent } from './pages/assignments/create-assignment-dialog/create-assignment-dialog.component';
import { UpdateAssignmentDialogComponent } from './pages/assignments/update-assignment-dialog/update-assignment-dialog.component';
import { BikesComponent } from './pages/bikes/bikes.component';
import { CreateBikeDialogComponent } from './pages/bikes/create-bike-entry-dialog/create-bike-dialog.component';
import { UpdateBikeDialogComponent } from './pages/bikes/update-bike-entry-dialog/update-bike-dialog.component';
import { BlacklistComponent } from './pages/blacklist/blacklist.component';
import { CreateBlacklistDialogComponent } from './pages/blacklist/create-blacklist-entry-dialog/create-blacklist-entry.component';
import { UpdateBlacklistDialogComponent } from './pages/blacklist/update-blacklist-entry-dialog/update-blacklist-entry.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CreateCarDialogComponent } from './pages/cars/create-car-entry-dialog/create-car-dialog.component';
import { UpdateCarDialogComponent } from './pages/cars/update-car-entry-dialog/update-car-dialog.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import { CreateCheckinDialogComponent } from './pages/checkin/create-checkin-dialog/create-checkin-dialog.component';
import { UpdateCheckinDialogComponent } from './pages/checkin/update-checkin-dialog/update-checkin-dialog.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CreateCheckoutDialogComponent } from './pages/checkout/create-checkout-dialog/create-checkout-dialog.component';
import { UpdateCheckoutDialogComponent } from './pages/checkout/update-checkout-dialog/update-checkout-dialog.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateDocumentDialogComponent } from './pages/documents/create-document-dialog/create-document-dialog.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { UpdateDocumentDialogComponent } from './pages/documents/update-document-dialog/update-document-dialog.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateLongTermDialogComponent } from './pages/longterm/create-long-term-dialog/create-long-term-dialog.component';
import { LongtermComponent } from './pages/longterm/longterm.component';
import { UpdateLongTermDialogComponent } from './pages/longterm/update-long-term-dialog/update-long-term-dialog.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { EditTaskDialogComponent } from './pages/tasks/edit-task-dialog/edit-task-dialog.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SentryService } from './services/sentry.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerAccessDialogComponent,
    DashboardComponent,
    PageNotFoundComponent,
    CarsComponent,
    TasksComponent,
    CheckinComponent,
    CheckoutComponent,
    AssignmentsComponent,
    BikesComponent,
    BlacklistComponent,
    BlacklistWidgetComponent,
    LongtermComponent,
    UpdateCheckinDialogComponent,
    CreateCheckinDialogComponent,
    CreateAssignmentDialogComponent,
    UpdateAssignmentDialogComponent,
    CreateCheckoutDialogComponent,
    UpdateCheckoutDialogComponent,
    CreateLongTermDialogComponent,
    UpdateLongTermDialogComponent,
    CreateCarDialogComponent,
    UpdateCarDialogComponent,
    CarsComponent,
    EditTaskDialogComponent,
    TableInfoDialogComponent,
    WeatherWidgetComponent,
    CreateBikeDialogComponent,
    UpdateBikeDialogComponent,
    DocumentsComponent,
    DocumentWidgetComponent,
    SeeDocumentDialogComponent,
    CreateDocumentDialogComponent,
    UpdateDocumentDialogComponent,
    ViewFilesDialogComponent,
    DashboardDocumentSectionComponent,
    DashboardLinksComponent,
    AnnouncementsComponent,
    CreateAnnouncementDialogComponent,
    UpdateAnnouncementDialogComponent,
    FileUploadComponent,
    CarNotificationWidgetComponent,
    DashboardNotificationSectionComponent,
    CreateBlacklistDialogComponent,
    UpdateBlacklistDialogComponent,
    CountdownComponent,
    DashboardAnnouncementsSectionComponent,
    CheckinCheckoutNotificationWidgetComponent,
    TasksNotificationWidgetComponent,
    BikeNotificationWidgetComponent,
    CsvExportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    materialModules,
  ],
  providers: [
    authInterceptorProviders,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    SentryService,
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: false,
        logErrors: true,
      }),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
