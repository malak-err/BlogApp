import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthserviceService } from './services/authservice.service';
import { map, Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const authService = inject(AuthserviceService); 
  const router = inject(Router); 

  return authService.isAuthenticated$.pipe(
    map((isAuthenticated: boolean) => {
      if (!isAuthenticated) {
        router.navigate(['/login']);
        return false;
      }
      return true;
    })
  );
};