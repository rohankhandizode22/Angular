import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildComponent } from '../viewchild/viewchild.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(ViewchildComponent) child!:AfterViewInit;
  constructor(){}
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    console.log("title");
    console.log("abc()");
  }

}
