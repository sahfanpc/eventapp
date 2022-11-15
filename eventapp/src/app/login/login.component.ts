import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform=this.fb.group({
    email1:['',[Validators.required]],
    password1:['',[Validators.required]]
  })
  constructor(private router:Router,private fb:FormBuilder,private db:DatabaseService) { }

  ngOnInit(): void {
  }
  login(){
    var email=this.loginform.value.email1
    var password=this.loginform.value.password1
    if(email==''||password==''){
      alert("please fill")
    }else{
      if(this.loginform.valid){
this.db.Login(email,password).subscribe((result:any)=>{
if(result){
  alert(result.message)
  localStorage.setItem('userid',JSON.stringify(result.userid))
  this.router.navigateByUrl('dashboard')
  localStorage.setItem('user',result.userid)
}
},(result)=>{
  alert(result.error.message)
})
      }else{
        alert("invalid")
      }
    }
  }

}
