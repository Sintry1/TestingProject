import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}

  ngOnInit(): void {
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
    console.warn(`WIP - login method is not implemented yet`);
  }
}
