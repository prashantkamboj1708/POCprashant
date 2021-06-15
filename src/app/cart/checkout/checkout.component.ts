import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
public user=JSON.parse(localStorage.getItem("currentuser"));
public currentuser:any;
public cart:any;
public no:any;
public subtotal=0;
public alluser:any;
public number=false;
  constructor(private service:DataService,private router:Router) { }

  ngOnInit(): void {
    this.service.getusers().subscribe(data=>{
      this.alluser=data;
      console.log(this.alluser);
    this.alluser.forEach(element => {
      if(element.id==this.user.id){ 
        this.currentuser=element;
        console.log(this.currentuser)
        this.cart=this.currentuser.cart;
       this.no=this.cart.length;
       if(this.no!=0){
         this.number=true;
       }
       console.log(this.cart);
       localStorage.removeItem("total");
       this.cart.forEach(element => {
        this.subtotal+=element.quantity*element.price;
      });
    }
  });
})
}

reducequantity(index){
  if(this.cart[index].quantity==1){
    this.cart.splice(index,1);
    this.no=this.cart.length;
    if(this.no==0){
      this.number=false;
    }
    this.currentuser.cart=this.cart;
    this.service.updateuser(this.currentuser.id,this.currentuser).subscribe(data=>{
      this.subtotal=0;
      this.cart.forEach(element => {
        
        this.subtotal+=element.quantity*element.price;
      });
    })
  }else{ 
  this.cart[index].quantity=this.cart[index].quantity-1;
  this.currentuser.cart=this.cart;
  this.service.updateuser(this.currentuser.id,this.currentuser).subscribe(data=>{
    this.subtotal=0;
    this.cart.forEach(element => {
      this.subtotal+=element.quantity*element.price;
    });
  })
}
}
addquantity(index){
  console.log(this.cart)
  this.cart[index].quantity=this.cart[index].quantity+1;
  this.currentuser.cart=this.cart;
  console.log(this.cart)
  this.service.updateuser(this.currentuser.id,this.currentuser).subscribe(data=>{
    this.subtotal=0;
    this.cart.forEach(element => {
      this.subtotal+=element.quantity*element.price;
    });
  })
}
proceedtopay(){
  this.service.send.next(this.cart);
  localStorage.setItem("total",JSON.stringify(this.subtotal));
  this.router.navigateByUrl('payment');
}
home(){
  this.router.navigateByUrl('homepage');
}
logout(){
  this.router.navigateByUrl('login');
}
gotoproducts(){
  this.router.navigateByUrl('products');
}
}
