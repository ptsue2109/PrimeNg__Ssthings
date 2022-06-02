import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getAllCate(): Observable<any> {
    return this.http.get<any>(`${environment.categoriesApi}`);
  }
  getOneCate(id: string):Observable<any> {
    return this.http.get<any>(`${environment.categoriesApi}/${id}/edit`);
  }
  removeCate(id: string):Observable<any>{
    return this.http.delete<any>(`${environment.categoriesApi}/${id}`);
  }
  addCate(item: any):Observable<any> {
    return this.http.post<any>(`${environment.categoriesApi}`,item);
  }
  editCate(item:any, id: any):Observable<any>{
    return this.http.patch<any>(`${environment.categoriesApi}/${id}`,item)
  }
}