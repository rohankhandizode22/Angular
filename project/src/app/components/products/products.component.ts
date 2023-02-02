import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  proData:any;
  isAdmin!:boolean;
  p=1;
  postData:any;
  search='';
  user:any;
  constructor(private authSer:AuthService) { }

  ngOnInit(): void {
    this.isAdmin=this.authSer.isAdmin();
    this.authSer.getProducts()
    .subscribe((res:any)=>{
      if(res.err==0){
          this.proData=res.prodata;
      }
    })
  }
  delPro(id:any){
    if(confirm("Do u want to delete it ?")){
     this.authSer.deleteData(id)
      .subscribe(res => {
        if (res) {
          let data = this.proData.filter((user: any) => user._id != id);
          this.proData = data;
          this.ngOnInit();

        }
      })
    }
  }

  
}
