import { Component,OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclechild',
  templateUrl: './lifecyclechild.component.html',
  styleUrls: ['./lifecyclechild.component.css']
})
export class LifecyclechildComponent implements OnInit, OnChanges {
    @Input() mycount!:number;
    constructor(){}
    ngOnInit(): void {
      
    }
    ngOnChanges(changes: SimpleChanges): void {
      console.log(changes['mycount']);
    }
}
