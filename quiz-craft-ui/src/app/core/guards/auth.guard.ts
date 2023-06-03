import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { selectIsLoggedIn } from '../store/auth.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(selectIsLoggedIn).pipe(
      take(1),
      tap((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate(['/login-signup'], {
            queryParams: { returnUrl: state.url },
          });
        }
      })
    );
  }
}
