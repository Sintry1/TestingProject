import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { AssignmentsComponent } from './pages/assignments/assignments.component';
import { BikesComponent } from './pages/bikes/bikes.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { LoginComponent } from './pages/login/login.component';
import { LongtermComponent } from './pages/longterm/longterm.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { BlacklistComponent } from './pages/blacklist/blacklist.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'checkin',
    component: CheckinComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'long-term',
    component: LongtermComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'car-list',
    component: CarsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'daily-tasks',
    component: TasksComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'assignments',
    component: AssignmentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'bikes',
    component: BikesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'documents',
    component: DocumentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'blacklist',
    component: BlacklistComponent,
    canActivate: [AuthGuard],
  },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard', canActivate: [AuthGuard] }, // Redirect to dashboard page
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] }, // PageNotFound for all other page requests
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
