import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  proData:any;
  constructor() { }
  ngOnInit(): void {
    this.proData=[
      {pname:"Product1",img:"https://th.bing.com/th/id/OIP.r6Uibrfogj7DYZL7k9a6UQHaFh?w=273&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7", price:2000},
      {pname:"Product2",img:"https://th.bing.com/th/id/OIP.r6Uibrfogj7DYZL7k9a6UQHaFh?w=273&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7", price:1000},
      {pname:"Product3",img:"https://th.bing.com/th/id/OIP.r6Uibrfogj7DYZL7k9a6UQHaFh?w=273&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7", price:3000},
      {pname:"Product4",img:"https://th.bing.com/th/id/OIP.r6Uibrfogj7DYZL7k9a6UQHaFh?w=273&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7", price:1000},
      {pname:"Product5",img:"https://th.bing.com/th/id/OIP.r6Uibrfogj7DYZL7k9a6UQHaFh?w=273&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7", price:2000},
      {pname:"Product6",img:"https://th.bing.com/th/id/OIP.r6Uibrfogj7DYZL7k9a6UQHaFh?w=273&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7", price:1000},
      {pname:"Product7",img:"https://th.bing.com/th/id/OIP.r6Uibrfogj7DYZL7k9a6UQHaFh?w=273&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7", price:3000},
      {pname:"Product8",img:"https://th.bing.com/th/id/OIP.r6Uibrfogj7DYZL7k9a6UQHaFh?w=273&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7", price:2000},
      {pname:"Product9",img:"https://th.bing.com/th/id/OIP.r6Uibrfogj7DYZL7k9a6UQHaFh?w=273&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7", price:1000},
      {pname:"Product10",img:"https://th.bing.com/th/id/OIP.r6Uibrfogj7DYZL7k9a6UQHaFh?w=273&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7",price:2000},
    ]
  }



}
