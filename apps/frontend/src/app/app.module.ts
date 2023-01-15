import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardDocumentSectionComponent } from './components/dashboardWidgets/dashboard-document-section/dashboard-document-section.component';
import { WeatherWidgetComponent } from './components/dashboardWidgets/weatherWidget/weather-widget.component';
import { DocumentWidgetComponent } from './components/documentWidget/document-widget.component';
import { SeeDocumentDialogComponent } from './components/documentWidget/seeDocumentDialog/see-document-dialog.component';
import { TableInfoDialogComponent } from './components/tableInfoDialog/table-info-dialog.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { materialModules } from './material.constant';
import { AssignmentsComponent } from './pages/assignments/assignments.component';
import { CreateAssignmentDialogComponent } from './pages/assignments/createAssignmentDialog/create-assignment-dialog.component';
import { UpdateAssignmentDialogComponent } from './pages/assignments/updateAssignmentDialog/update-assignment-dialog.component';
import { BikesComponent } from './pages/bikes/bikes.componenet';
import { CreateBikeDialogComponent } from './pages/bikes/createBikeEntryDialog/create-bike-dialog.component';
import { UpdateBikeDialogComponent } from './pages/bikes/updateBikeEntryDialog/update-bike-dialog.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CreateCarDialogComponent } from './pages/cars/createCarEntryDialog/create-car-dialog.component';
import { UpdateCarDialogComponent } from './pages/cars/updateCarEntryDialog/update-car-dialog.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import { CreateCheckinDialogComponent } from './pages/checkin/createCheckinDialog/create-checkin-dialog.component';
import { UpdateCheckinDialogComponent } from './pages/checkin/updateCheckinDialog/update-checkin-dialog.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CreateCheckoutDialogComponent } from './pages/checkout/createCheckoutDialog/create-checkout-dialog.component';
import { UpdateCheckoutDialogComponent } from './pages/checkout/updateCheckoutDialog/update-checkout-dialog.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateDocumentDialogComponent } from './pages/documents/createDocumentDialog/create-document-dialog.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { UpdateDocumentDialogComponent } from './pages/documents/updateDocumentDialog/update-document-dialog.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateLongTermDialogComponent } from './pages/longterm/createLongTermDialog/create-long-term-dialog.component';
import { LongtermComponent } from './pages/longterm/longterm.component';
import { UpdateLongTermDialogComponent } from './pages/longterm/updateLongTermDialog/update-long-term-dialog.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { EditTaskDialogComponent } from './pages/tasks/editTaskDialog/editTaskDialog.component';
import { TasksComponent } from './pages/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    CarsComponent,
    TasksComponent,
    CheckinComponent,
    CheckoutComponent,
    AssignmentsComponent,
    BikesComponent,
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
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
