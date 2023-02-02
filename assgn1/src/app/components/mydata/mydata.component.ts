import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.css']
})
export class MydataComponent implements OnInit {
   userData:any;
  constructor(private pser:ProductService) { }

  ngOnInit(): void {
    this.pser.getAllProduct()
    .subscribe((res:any)=>{
        console.log(res);
        this.userData=res;
    })
  }
  delPro(id:any){
    if(confirm("Do u want to delete?")){
      this.pser.deleteData(id)
      .subscribe(res=>{
         if(res){
          alert("Data Deleted");
          let data=this.userData.filter((user:any)=> user._id!=id);
          this.userData=data;
         }
      })
    }
  }
}
