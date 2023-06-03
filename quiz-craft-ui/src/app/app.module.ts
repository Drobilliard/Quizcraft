import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    AuthLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
