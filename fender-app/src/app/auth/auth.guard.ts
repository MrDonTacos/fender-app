import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
    })
    export class AuthGuard implements CanActivate {
    constructor(
     private router: Router
    ) {}
    canActivate() {
      if (this.isLogged()) {
       return true;
      } else {
         this.router.navigate(['/login']);
         return false;
       }
     }

     isLogged() {
        return !!localStorage.getItem('token')
     }
    }