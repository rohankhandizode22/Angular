import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 apiURL=environment.apiURL;
  constructor(private http:HttpClient,private router:Router) { }
  postLogin(data:any){
    return this.http.post(`${this.apiURL}auth`,data);
  }
  postRegis(data:any){
    return this.http.post(`${this.apiURL}users`,data);
  }
  postAddProduct(data:any){
   return this.http.post(`${this.apiURL}products`,data);
  }
  getProducts(){
   return this.http.get(`${this.apiURL}products`);
  }

  deleteData(id:any){
   console.log("deletedatae",id);
   
   return this.http.delete(`${this.apiURL}products/${id}`);
  }

  getProductById(id: any): Observable<any> {
   return this.http.get(`${this.apiURL}products/${id}`);
 }


  UpdateData(data: any, id: any): Observable<any> {
   return this.http.put(`${this.apiURL}products/${id}`, data);
 }

  isLoggedIn():boolean{
     const data=localStorage.getItem("_token");
     if(!data){ return false }
     else { return true }
  }
  getUser():any{
     try{ 
      const data:any=localStorage.getItem("_token");
      return jwt_decode(data)}
     catch(e){ return null}
    }
  isAdmin():boolean{
     return !this.getUser()?false:this.getUser().isAdmin;
  }
  logout(){
     localStorage.removeItem("_token");
     this.router.navigate(['/'])
     .then(()=>{
        window.location.reload();
     })
  }
}
