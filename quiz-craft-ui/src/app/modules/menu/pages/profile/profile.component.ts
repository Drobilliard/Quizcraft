import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { take, tap } from 'rxjs';
import { AuthFacade } from 'src/app/core/store/auth.facade';
import { selectAuthUser } from 'src/app/core/store/auth.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private store: Store) {}
}
