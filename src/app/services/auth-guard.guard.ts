import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';
import { map, Observable } from 'rxjs';

//export const authGuardGuard: CanActivateFn = (route, state) => {
 // return true;
//};
@Injectable({
  providedIn: 'root'
})
export class authGuardGuard implements CanActivateFn {

  constructor(private authService: AuthserviceService, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isAuthenticated$.pipe(
          map((isAuthenticated: boolean) => {
              if (!isAuthenticated) {
                  this.router.navigate(['/login']);
                  return false;
              }
              return true;
          })
      );
  }
}