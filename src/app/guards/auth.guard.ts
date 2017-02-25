import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

import { LoginService } from './../login/login.service';


@Injectable()
export class AuthGuard implements CanActivate {


  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean> | boolean{

      if (this.loginService.usuarioValidado()){
        return true;
      } 
        
        this.router.navigate(['/login']);
        return false;
  }

}


