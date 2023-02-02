import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title:string="About Page";
  descp:string="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nobis, sequi non deserunt itaque quae libero! Consectetur aut quasi veniam cum excepturi inventore, exercitationem vel libero asperiores nobis eius a.";
  proData:any[]=[
    {id:1,name:"A",city:"noida"},
    {id:2,name:"B",city:"delhi"},
    {id:3,name:"C",city:"Pune"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
