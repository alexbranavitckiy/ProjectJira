import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "./AuthService";



@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router:Router, private authService: AuthService ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean|UrlTree {
    if (!this.authService.getisloggedIn()) {
      alert('No access');
      this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
      return false;

    }
    return true;
  }
}
