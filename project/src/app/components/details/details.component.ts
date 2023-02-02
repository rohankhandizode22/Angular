import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  proData:any;
  myData = { name: '', price: '' }
  id: any;
  constructor(private pser: AuthService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(par => {
      this.id = par['id'];
      this.pser.getProductById(this.id)
        .subscribe(res => {
          if (res) {
            console.log("hello",res.prodata.name)
            this.proData=res.prodata
            this.myData = { name: res.name, price: res.price }
            
          }
        })
    })
  }

}
