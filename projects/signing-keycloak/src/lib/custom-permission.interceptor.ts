import {inject, Inject, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SigningConfiguration} from "./signing-configuration";
import {SIGNING_CONFIG} from "./config";

@Injectable()
export class CustomPermissionInterceptor implements HttpInterceptor {


/*  constructor(@Inject('envconfig') envconfig: any) {
    this.environment = envconfig;
  } */

  // environment.clientid  -- external-client-fe

 /* intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const environment : SigningConfiguration = inject(SIGNING_CONFIG) as SigningConfiguration;
    const authReq = request.clone({
      headers: request.headers.set('my-permission', environment.clientid)
    });*/

    // send cloned request with header to the next handler.
    //return next.handle(authReq);
 // }


  constructor(@Inject(SIGNING_CONFIG) private environment: SigningConfiguration) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      headers: request.headers.set('my-permission', this.environment.clientid)
    });

    // invia la richiesta clonata con l'header al gestore successivo.
    return next.handle(authReq);
  }
}
