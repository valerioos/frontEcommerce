import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import Swal from "sweetalert2";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
            const mensaje = err.error?.response || 'Ocurrió un error inesperado';
            const estatus = err.status;

            switch(estatus){
                case 400: 
                Swal.fire({
                    icon: 'error',
                    title: 'Solicitud incorrecta',
                    text: mensaje   
                });
                break
                case 404: 
                Swal.fire({
                    icon: 'info',
                    title: 'No encontrado',
                    text: mensaje  || 'El recurso solicitado no fue correcto' 
                });
                break;
                case 409: 
                Swal.fire({
                    icon: 'warning',
                    title: 'Conflicto',
                    text: mensaje   
                });
                break;
                case 500: 
                Swal.fire({
                    icon: 'error',
                    title: 'Error del servidor',
                    text: mensaje || 'Se produjo un error interno, Intenta más tarde'
                });
                break;
                case 0: 
                Swal.fire({
                    icon: 'error',
                    title: 'Sin conexion',
                    text: 'No se pudo conectar con el servidor'
                });
                break;
                default: 
                Swal.fire({
                    icon: 'error',
                    title: `ERROR ${estatus}`,
                    text: mensaje
                });
                break;
            }

            return throwError(()=> err);
        }))
    }
}