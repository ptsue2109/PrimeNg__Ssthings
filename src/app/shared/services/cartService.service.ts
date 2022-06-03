import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
//   getAllCart(): Observable<any> {
//     return this.http.get<any>(`${environment.cartApi}`);
//   }
//   getOneCart(id: string):Observable<any> {
//     return this.http.get<any>(`${environment.cartApi}/${id}/edit`);
//   }
//   removeCart(id: string):Observable<any>{
//     return this.http.delete<any>(`${environment.cartApi}/${id}`);
//   }
  addCart(item: any):Observable<any> {
    return this.http.post<any>(`${environment.cartApi}`,item);
  }
//   editCart(item:any, id: any):Observable<any>{
//     return this.http.patch<any>(`${environment.cartApi}/${id}`,item)
//   }
}