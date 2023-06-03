import { NgModule } from '@angular/core';

import { LoginSignupComponent } from './login-signup/login-signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from 'src/app/data/service/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [LoginSignupComponent, LoginComponent, SignupComponent],
  imports: [SharedModule, AuthRoutingModule],
  providers: [AuthService],
})
export class AuthModule {}
