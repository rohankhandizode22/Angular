import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations'
@Component({
  selector: 'app-myanimation',
  templateUrl: './myanimation.component.html',
  styleUrls: ['./myanimation.component.css'],
  animations:[
    trigger('fadeInOut',[
      state('void',style({
        opacity:0
      })),
      transition('void<=>*',animate(10000)),
    ]),
    trigger('changeDimension',[
      state('initial',style({
        backgroundColor:'blue',
        width:'100px',
        height:'100px'
      })),
      state('final',style({
        backgroundColor:'tomato',
        width:'200px',
        height:'300px'
      })),
      transition('initial=>final',animate('1500ms')),
      transition('final=>initial',animate('1000ms')),
    ])
  ]
})
export class MyanimationComponent implements OnInit {
  currentState='initial';
  constructor() { }
  ngOnInit(): void {
  }
  changeState(){
      this.currentState=this.currentState==='initial'?'final':'initial';
  }
}
