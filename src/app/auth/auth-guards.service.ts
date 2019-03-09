import { Injectable, Component } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate, CanActivateChild, CanLoad {


  canLoad(route: Route): boolean {
    if (this.authService.user) {
      console.log('zalogowany')
      return true;
    }
    this.router.navigate(['/login']);
      return false;
  }

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.user) {
      return true;
    }
    this.router.navigate(['/login']);
      return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }
}
