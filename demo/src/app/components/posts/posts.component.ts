import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postData:any;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    const API="https://jsonplaceholder.typicode.com/posts";
    this.http.get(API)
    .subscribe((res:any)=>{
      console.log(res);
      this.postData=res;
    },error=>{
      console.log("Oops", error)
    })
  }

}
