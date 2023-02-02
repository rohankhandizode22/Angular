import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  myForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    contactNumber:new FormControl('',[Validators.required])
   })
  constructor(private authSer:AuthService,private router:Router) { }
  errMsg:any;
  succMsg:any;
  ngOnInit(): void {
  }
 postData(){
   let formData=this.myForm.getRawValue();
   this.authSer.postRegis(formData)
   .subscribe((res:any)=>{
     if(res.err==0){
        this.succMsg=res.msg;
     }
     if(res.err==1){
         this.errMsg=res.msg;
     }
   })
 }
}
