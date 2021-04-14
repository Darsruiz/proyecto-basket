import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogueadoService } from 'src/app/servicios/logueado/logueado.service';

@Injectable({
  providedIn: 'root'
})
export class IsLogueadoGuard implements CanActivate {

  constructor(private logueado: LogueadoService){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      //está logueado
      return /*true */this.logueado.getEstado()
  }
  
}
