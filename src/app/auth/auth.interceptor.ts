import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { enviroment } from "../environments/environmet";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userName: string = enviroment.authUser;
        const userPass: string = enviroment.authPassword;

        const authHeader: string = 'Basic ' + btoa(`${userName}:${userPass}`);

        const cloned = req.clone({
            setHeaders: {
                Authorization: authHeader
            }
        })
        return next.handle(cloned);
    }
}