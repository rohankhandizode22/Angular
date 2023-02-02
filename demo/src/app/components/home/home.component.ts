import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title:string="Home Page";
  courses:string[]=["Php","Java","Linux","Python"];
  dataInfo="Spidermann";
  imagePath:string="https://picsum.photos/200";
  status:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  abc(){
    alert("Hello abc");
  }

}
