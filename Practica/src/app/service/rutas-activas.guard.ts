import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Auth} from '@firebase/auth'
import { AuthFirebaseService } from './auth-firebase.service';
@Injectable({
  providedIn: 'root'
})
export class RutasActivasGuard implements CanActivate {
  constructor(
    private auth: AuthFirebaseService,
    private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    if(this.auth.isLoged){
      return true;
    }else{
      console.log('Acceso denegado');
      this.router.navigate(['']);
      return false;
    }
  }
  
}
