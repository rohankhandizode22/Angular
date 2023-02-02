import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-mychild',
  templateUrl: './mychild.component.html',
  styleUrls: ['./mychild.component.css']
})
export class MychildComponent implements OnInit{
  @Input() mycount:any;
  @Output() myevent=new EventEmitter();
  mycounter:any=0;
  constructor(){}
  ngOnInit(): void {
   
  }
  sendParent(){
    this.mycounter++;
    this.myevent.emit(this.mycounter)
  }

}
