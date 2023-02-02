import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postData:any;
   API="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
     this.http.get(this.API)
     .subscribe((res:any)=>{
        console.log(res);
        this.postData=res;
     },error=>{
        console.log("Oops",error)
     })
       
      //  this.getPosts().subscribe(res=>{
      //     this.postData=res;
      //  },err=>{
      //   console.log(err)
      //  })
      }  
      getPosts(){
        return this.http.get(this.API).pipe(
          catchError((error:HttpErrorResponse)=>{
            console.log('An error occured : ',error.error);
            return throwError(error)
          })
        )
      }

}
