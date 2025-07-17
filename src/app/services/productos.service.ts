import { Injectable } from '@angular/core';
import { enviroment } from '../environments/environmet';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { ProductoResponse } from '../models/productosResponse.model';
import { ProductoRequest } from '../models/ProductosRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl: string = enviroment.apiUrl + 'productos/';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<ProductoResponse[]> {
    return this.http.get<ProductoResponse[]>(this.apiUrl).pipe(
      map(productos => productos.sort()),
      catchError(error =>{
        console.log('error al obtener los productos', error);
        return of([]);
      })
    );
  }

  postProducto(producto: ProductoRequest): Observable<ProductoResponse> {
    return this.http.post<ProductoResponse>(this.apiUrl, producto).pipe(
      catchError(error => {
        console.log('Error al insertar Producto', error);
        return throwError(() => error);
      })
    );
  }

  
  putProducto(producto: ProductoRequest, productoId: number): Observable<ProductoResponse> {
    return this.http.put<ProductoResponse>(`${this.apiUrl}${productoId}`, producto).pipe(
      catchError(error => {
        console.log('Error al actualizar Producto', error);
        return throwError(() => error);
      })
    );
  }

  deleteProducto(productoId: number): Observable<ProductoResponse> {
    return this.http.delete<ProductoResponse>(`${this.apiUrl}${productoId}`).pipe(
      catchError(error => {
        console.log('Error al eliminar Producto', error);
        return throwError(() => error);
      })
    );
  }
}
