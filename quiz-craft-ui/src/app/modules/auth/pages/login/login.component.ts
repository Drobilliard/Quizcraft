import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from 'primeng/api';
import { AuthService } from 'src/app/core/auth.service';
import { AuthFacade } from 'src/app/core/store/auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  readonly loginForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
  });
  isLoading$ = this.authFacade.isLoadingLogin$;
  showLoginError$ = this.authFacade.hasLoginError$;
  message: Message[];
  loadingMsg!: string;

  submit() {
    this.loadingMsg = 'Logging in..';
    const { username, password } = this.loginForm.value;
    this.authFacade.login(username!, password!);
  }

  constructor(private authFacade: AuthFacade) {
    this.message = [
      {
        severity: 'error',
        summary: 'Error',
        detail: 'Credentials not valid!',
      },
    ];
    console.log('looaded login');
  }
}
