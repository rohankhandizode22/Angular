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
    return this.http.get(`${this.API}getproducts`);
   }
   postData(data:any):Observable<any>{
      return this.http.post(`${this.API}addproducts`,data);
   }
   updateData(data:any,id:any):Observable<any>{
    return this.http.put(`${this.API}updateproduct/${id}`,data);
   }
   deleteData(id:any):Observable<any>{
    return this.http.delete(`${this.API}deleteproduct/${id}`);
   }
}
