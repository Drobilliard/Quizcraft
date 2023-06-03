import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from 'primeng/api';
import { CreateUser } from 'src/app/data/models/create-user-model';
import { AuthService } from 'src/app/data/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  createUser: CreateUser;
  loading: boolean = false;
  loadingMsg!: string;
  message: Message[];

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

  constructor(private snackBar: MatSnackBar, private usrService: AuthService) {
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
