import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  count:number=0;
  constructor() {}

  ngOnInit(): void{

  }
  counter(){
    this.count++;
  }

}
