import { Component, OnInit,Input,OnChanges, SimpleChanges,DoCheck} from '@angular/core';
@Component({
  selector: 'app-lifecyclechild',
  templateUrl: './lifecyclechild.component.html',
  styleUrls: ['./lifecyclechild.component.css']
})
export class LifecyclechildComponent implements OnInit,OnChanges,DoCheck {
  @Input() mycount!:number;
  docheckcount=0;
  constructor() { }
  ngOnInit(): void {
    console.log("OnInit")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['mycount']);
  }
  ngDoCheck(): void {
    console.log(" DO Check Call")
    this.docheckcount++;

  }
}
