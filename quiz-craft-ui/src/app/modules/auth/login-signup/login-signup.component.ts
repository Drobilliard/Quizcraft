import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from 'primeng/api';
import { AuthFacade } from 'src/app/core/store/auth.facade';
import { CreateUser } from 'src/app/data/models/create-user-model';
import { AuthService } from 'src/app/data/service/auth.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent {
  createUser: CreateUser;
  loading: boolean = false;
  loadingMsg!: string;
  register(RegisterForm: any) {
    this.loading = true;
    this.loadingMsg = 'Registering...';
    console.log('creating user ' + JSON.stringify(this.createUser));
    this.usrService.registerUser(this.createUser).subscribe({
      next: (data: any) => {
        console.log('user created ' + data);
        this.snackBar.open('User Created Successful', '', { duration: 1000 });
        this.loading = false;
      },
      error: (error: any) => {
        console.log('error: ' + JSON.stringify(error));
        this.snackBar.open('Registration error', '', { duration: 1000 });
        this.loading = false;
      },
    });
  }
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

  submit() {
    this.loadingMsg = 'Logging in..';
    const { username, password } = this.loginForm.value;
    this.authFacade.login(username!, password!);
  }

  constructor(
    private snackBar: MatSnackBar,
    private usrService: AuthService,
    private authFacade: AuthFacade
  ) {
    this.createUser = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.message = [
      {
        severity: 'error',
        summary: 'Error',
        detail: 'Credentials not valid!',
      },
    ];
  }
}
