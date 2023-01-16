import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'frontend-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../assets/styles/dialog.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new UntypedFormGroup({});
  isLoading = false;

  @ViewChild('email') emailInput!: ElementRef;
  @ViewChild('password') passwordInput!: ElementRef;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    // Check if the user is already logged in
    if (this.authService.getAccessInfo()) {
      console.log('You are already logged in - redirecting to dashboard');
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.isLoading = false;
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      password: new UntypedFormControl('', [Validators.maxLength(100), Validators.required]),
    });
  }

  onSubmit(): void {
    if (!this.loginForm.valid) {
      if (this.loginForm.get('email')?.invalid) {
        this.emailInput.nativeElement.focus();
      } else if (this.loginForm.get('password')?.invalid) {
        this.passwordInput.nativeElement.focus();
      }
    } else {
      this.login();
    }
  }

  login(): void {
    this.isLoading = true;
    this.loginForm.disable();
    this.authService
      .login({
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      })
      .subscribe({
        next: (response) => {
          this.authService.saveAccessInfo(response);
          this.isLoading = false;
          this.loginForm.enable();
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;
          this.loginForm.enable();
          this.snackBar.open('Failed to log in', 'Okay', {
            duration: 10000,
          });
        },
      });
  }
}
