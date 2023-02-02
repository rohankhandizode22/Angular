import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.css']
})
export class MydataComponent implements OnInit {
  myData={name:'',city:''}
   userData:any;
   flag:boolean=true;
   upid:string='';
  constructor(private pser:ProductService) { }

  ngOnInit(): void {
    this.pser.getAllProduct()
    .subscribe((res:any)=>{
        console.log(res);
        this.userData=res;
    })
  }
  postdata(){
     if(this.flag==false && this.upid!=''){
        this.pser.updateData(this.myData,this.upid)
        .subscribe(res=>{
          if(res){
              alert("Data Updated");
              this.myData={name:'',city:''}
              this.upid='';
              this.flag=true;
              this.pser.getAllProduct()
                   .subscribe((res:any)=>{
                   this.userData=res;
              })
          }
        })
     }
     else {
     this.pser.postData(this.myData)
     .subscribe(res=>{
      if(res){
        this.myData={name:'',city:''}
         alert("Data added");
         this.pser.getAllProduct()
        .subscribe((res:any)=>{
           this.userData=res;
        })
      }
     })
    }
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
  editPro(id:any){
    this.pser.updateData(this.myData,this.upid)
    .subscribe(res=>{
      console.log(res)
         this.myData={name:res.name,city:res.city};
         this.flag=false;
         this.upid=id;
    })
  }
}
