import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
 public currentuserdata=JSON.parse(localStorage.getItem("currentuser"));
  constructor(private router:Router,private service :DataService) { }
public no:any;
public currentuser:any;
public number=false;
  ngOnInit(): void {
    this.service.getusers().subscribe(data=>{
      this.currentuser=data;
      this.currentuser.forEach(element => {
        if(element.id==this.currentuserdata.id){
          this.no=element.cart.length;
          if(this.no!=0){
            this.number=true;
          }
        }
        
      });
    })
    
    
  }
  home(){
    this.router.navigateByUrl('home');
  }
  logout(){
    this.router.navigateByUrl('login');
  }
  
  gotocheckout(){
    
  this.router.navigateByUrl('cart/checkout');
  }
  gotoproducts(){
    this.router.navigateByUrl('products');
  }

}
