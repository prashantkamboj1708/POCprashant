import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login=new FormGroup({
email:new FormControl(''),
password:new FormControl('')
})
public userlist:any;
public obj:any;
isvalid=false;
  constructor(private router:Router,private service:DataService) { }

  ngOnInit(): void {
    this.service.getusers().subscribe(data=>{
      this.userlist=data;
      localStorage.clear();
    })
  }
loggingin(){
  this.userlist.forEach(element => {
    if(this.login.value.email==element.email && this.login.value.password==element.password && element.verified==true){
      localStorage.clear();
      localStorage.setItem("home","pass");
      localStorage.setItem("currentuser",JSON.stringify(element));
      this.router.navigateByUrl('homepage');
      console.log(true);
    }
  });
this.isvalid=true;

}
register(){
  this.router.navigateByUrl('');
}
}
