import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    loggedIn!:boolean;
    isAdmin!:boolean;
    postData:any;
  search='';
  user:any;
  constructor(private authSer:AuthService) { }

  ngOnInit(): void {
    this.loggedIn=this.authSer.isLoggedIn();
    this.isAdmin=this.authSer.isAdmin();
    
    this.authSer.getProducts()
    .subscribe((res:any)=>{
        console.log(res);
        this.postData=res;
    })
  
  }
  signOut(){
    if(confirm("Do u want to logout?")){
      this.authSer.logout();
    }
  }
}
