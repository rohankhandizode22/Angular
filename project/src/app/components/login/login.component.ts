import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   myForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
   })
  constructor(private authSer:AuthService,private router:Router) { }
  errMsg:any;
  ngOnInit(): void {
   
  }
  postData(){
    let formData=this.myForm.getRawValue();
    this.authSer.postLogin(formData)
    .subscribe((res:any)=>{
        if(res.err==0){
          localStorage.setItem("_token",res.token);
          this.router.navigate(['/products'])
          .then(()=>{
             window.location.reload();
          })
        }
        if(res.err==1){
          this.errMsg=res.msg;
        }
    })
  }

}
