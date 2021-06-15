import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

interface filter2 {
  value: string;
  viewValue: string;
}
interface Filter1 {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-prodpage',
  templateUrl: './prodpage.component.html',
  styleUrls: ['./prodpage.component.css']
})
export class ProdpageComponent implements OnInit {
  selectedValue: string;
  constructor(private service:DataService,private router:Router) { }
public allproducts:any;
public alllist:any;
public show:any;
public no:any;
public currentuser:any;
public search:any;
public number:any;
public alluser:any;
choosen1="Sort By";
choosen2="Shop By Category";
  ngOnInit(): void {
    this.getallproducts();
    this.getcurrentuser();
  }
   foods: filter2[] = [
   
     {value:'none',viewValue:'none'},
    {value: 'Price Low to High', viewValue: 'Price Low to High'},
    {value: 'Price high to low', viewValue: 'Price high to Low'}
  ];
  categories: Filter1[] = [
   
    {value:'none',viewValue:'none'},
   {value: 'Electronics', viewValue: 'Electronics'},
   {value: 'Clothing', viewValue: 'Clothing'},
   {value: 'Footwear', viewValue: 'Footwear'},

 ];
getallproducts(){
  this.service.getprod().subscribe(data=>{
    this.allproducts=data;
    this.alllist=this.allproducts.all;
    // this.show=this.allproducts.all;
 })
}
getcurrentuser(){
  let u=JSON.parse(localStorage.getItem("currentuser"));
  this.service.getusers().subscribe(data=>{
    this.alluser=data;
    this.alluser.forEach(element => {
      if(element.id==u.id){
        this.currentuser=element;
        this.no=this.currentuser.cart.length;
    if(this.no!=0){
      this.number=true;
    }
  }
    });
  })
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
lowtohigh(){
  this.choosen1="Price:low to high"
  console.log("low to high");
  this.alllist.sort((a, b) => (a.price < b.price ? -1 : 1));;

}
hightolow(){
  this.choosen1="Price:high to low"
  this.alllist.sort((a, b) => (a.price > b.price ? -1 : 1));;
 
}
none(){
  this.choosen1="sort by";
 this.service.getprod().subscribe(data=>{
   this.allproducts=data;
   this.alllist=this.allproducts.all;
 })
}
clothing(){
  this.choosen1="sort by";
  this.choosen2="clothing";
  this.alllist=this.allproducts.clothing;
}
all(){
  this.choosen1="sort by";
  this.choosen2="All";
  this.service.getprod().subscribe(data=>{
    this.allproducts=data;
    this.alllist=this.allproducts.all;
  })
}
electronics(){
  this.choosen1="sort by";
  this.choosen2="Electronics";
  this.alllist=this.allproducts.electronics;
}
footwear(){
  this.choosen1="sort by";
this.choosen2="Footwear";
this.alllist=this.allproducts.footwear;
}
Addtocart(id,data)
{
this.number=true;
    if(!this.currentuser.cart.includes(data)){ 
      data.quantity++;
      this.currentuser.cart.push(data);
      this.no=this.currentuser.cart.length;
      this.service.updateuser(this.currentuser.id,this.currentuser).subscribe(data=>{
  })
  }
  else{
    data.quantity++;
    this.service.updateuser(this.currentuser.id,this.currentuser).subscribe(data=>{
  })
  }
}
searched(){
  this.choosen1="sort by";
 let searchlist=[];
 this.service.getprod().subscribe(data=>{
  this.allproducts=data;
  this.alllist=this.allproducts.all;
  this.alllist.forEach(element => {
    if(this.search==element.name || this.search==element.name|| this.search==element.brand){
      searchlist.push(element);
    }
  });
 this.alllist=searchlist
 })
}
gotocheckout(){
this.service.send.next(this.currentuser);
this.router.navigateByUrl('cart/checkout');
}


}

