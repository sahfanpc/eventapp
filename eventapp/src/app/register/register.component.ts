import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform=this.fb.group({
    userid1:['',[Validators.required]],
    email1:['',[Validators.required]],
    password1:['',[Validators.required]],
    dateofbirth1:['',[Validators.required]]
  })
  //   acno2:['',[Validators.required]],
  // psd2:['',[Validators.required]]
  // })

  constructor(private router:Router,private db:DatabaseService,private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }
register(){
  var userid:any=this.registerform.value.userid1
  var email:any=this.registerform.value.email1
  var password:any=this.registerform.value.password1
  var dateofbirth:any=this.registerform.value.dateofbirth1

  if(userid ==''||email ==''||password==''||dateofbirth==''){
    alert("please fill")
  }else{
   if(this.registerform.valid){
      this.db.Register(userid,email,password,dateofbirth).subscribe((result:any)=>{
        if(result){
         alert(result.message)
         this.router.navigateByUrl('login')
        }
      },(result)=>{
        alert(result.error.message)
      })
    }else{
      alert('invalid')
    }
    }
  }


}
