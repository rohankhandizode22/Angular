import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API="http://localhost:8899/api/";
  constructor(private http:HttpClient) { }
   getAllProduct():Observable<any>{
    return this.http.get(`${this.API}getProduct`);
   }
   postData(data:any):Observable<any>{
      return this.http.post(`${this.API}addProduct`,data);
   }
   updateData(data:any,id:any):Observable<any>{
    return this.http.put(`${this.API}updateProduct/${id}`,data);
   }
   deleteData(id:any):Observable<any>{
    return this.http.delete(`${this.API}deleteProduct/${id}`);
   }
}
