import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { NgPrimeModule } from './ng-prime.module';
import { SpinnerComponent } from './loaders/spinner.component';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgPrimeModule,
    MaterialModule,
  ],
  declarations: [SpinnerComponent],
  providers: [MessageService],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    NgPrimeModule,
    SpinnerComponent,
  ],
})
export class SharedModule {
  constructor() {
    console.log('shared Module loaded');
  }
}
