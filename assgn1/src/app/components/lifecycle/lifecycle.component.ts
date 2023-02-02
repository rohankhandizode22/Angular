import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  count:number=0;
  proData:any;
  constructor() { }
  ngOnInit(): void {
    this.proData=[
      {id:1,name:"A",price:2345},
      {id:2,name:"B",price:3345},
      {id:3,name:"C",price:4345},
      {id:4,name:"D",price:5345},
      {id:5,name:"E",price:6345}
    ]
  }
 counter(){
     this.count++;
  }
}
