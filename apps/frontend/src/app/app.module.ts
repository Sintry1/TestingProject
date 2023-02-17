import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Sentry from '@sentry/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardDocumentSectionComponent } from './components/dashboard-widgets/dashboard-document-section/dashboard-document-section.component';
import { DashboardLinksComponent } from './components/dashboard-widgets/dashboard-links/dashboard-links.component';
import { WeatherWidgetComponent } from './components/dashboard-widgets/weather-widget/weather-widget.component';
import { DocumentWidgetComponent } from './components/document-widget/document-widget.component';
import { SeeDocumentDialogComponent } from './components/document-widget/see-document-dialog/see-document-dialog.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ManagerAccessDialogComponent } from './components/manager-access-dialog/manager-access-dialog.component';
import { TableInfoDialogComponent } from './components/table-info-dialog/table-info-dialog.component';
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
import { BlacklistComponent } from './pages/blacklist/blacklist.component';
import { SentryService } from './services/sentry.service';
import { BlacklistWidgetComponent } from './components/blacklist-widget/blacklist-widget.component';
import { CreateBlacklistDialogComponent } from './pages/blacklist/create-blacklist-entry-dialog/create-blacklist-entry.component';
// import { UpdateBlacklistDialogComponent } from './pages/blacklist/update-blacklist-entry-dialog/update-blacklist-entry.component';

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
    DashboardDocumentSectionComponent,
    DashboardLinksComponent,
    AnnouncementsComponent,
    CreateAnnouncementDialogComponent,
    UpdateAnnouncementDialogComponent,
    FileUploadComponent,
    CreateBlacklistDialogComponent,
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
