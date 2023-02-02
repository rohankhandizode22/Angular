import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  myForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    manufacturer:new FormControl('',[Validators.required]),
    availableItems:new FormControl('',[Validators.required])
  })
  imagePath:any='';
  errMsg='';
  constructor(private authSer:AuthService) { }

  ngOnInit(): void {
  }
  upImage(event:any){
      if(event.target.files.length>0){
          this.imagePath=event.target.files[0];
      }
  }
  formData(){
    if(this.imagePath!=''){
       if(this.imagePath.type==="image/jpg" || this.imagePath.type==="image/jpeg" || this.imagePath.type==="image/png"){
          //when we upload any attaachment we send data with formdata 
          let fdata=this.myForm.getRawValue();
          let formData=new FormData();
          formData.append("name",fdata.name as any)
          formData.append("category",fdata.category as any)
          formData.append("price",fdata.price as any)
          formData.append("description",fdata.description as any)
          formData.append("manufacturer",fdata.manufacturer as any)
          formData.append("availableItems",fdata.availableItems as any)
          formData.append("attach",this.imagePath);
          console.log("hiiii1",formData)
          this.authSer.postAddProduct(formData)
          .subscribe((res:any)=>{
            if(res.err==0){
                alert(res.msg);
            }
            if(res.err==1){
              this.errMsg=res.msg;
            }
          })
       }
       else {
        this.errMsg="Only support jpg or png images";
       }
    }
    else{
      this.errMsg="Please select a image";
    }
     
  }
}
