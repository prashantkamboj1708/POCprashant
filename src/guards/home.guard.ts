import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){ 
    if(localStorage.getItem("home")){ 
    
    return true;
    }
    else{ 
    this.router.navigateByUrl('login');
    return false;
  }
  
}
}
