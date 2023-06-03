import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { LocalStorageService } from './services/local-storage.service';
import { TokenStorageService } from './services/token-storage.service';
import { ConfigService } from './services/config.service';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './store/auth.effects';
import { AuthFacade } from './store/auth.facade';
import { AUTH_FEATURE_KEY, authReducer } from './store/auth.reducer';
import { AuthService, authServiceInitProvider } from './auth.service';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  imports: [
    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    LocalStorageService,
    TokenStorageService,
    ConfigService,
    AuthGuard,
    NoAuthGuard,
    AuthFacade,
    AuthService,
    authServiceInitProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
