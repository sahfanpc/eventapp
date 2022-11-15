import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
 

  constructor(private router:Router,private http:HttpClient) { }
  Register(userid:any,email:any,password:any,dateofbirth:any){
   const data={
      userid,
      email,
      password,
      dateofbirth
    }
    return this.http.post('http://localhost:3003/register',data)
  }
  Login(email:any,password:any){
    const data={
       email,
       password
     }
     return this.http.post('http://localhost:3003/login',data)
   }
 Add(eventname:any,eventdate:any,eventowner:any,priority:any){
  const data={
    eventname,
    eventdate,
    eventowner,
    priority
  }
  return this.http.post('http://localhost:3003/add',data)
 }
 
//  button(id1:any){
// const data={id1}
// return this.http.get('http://localhost:3003/events/'+data)
//  }
// users=JSON.parse(localStorage.getItem('users')||'')
delete(eventname:any,eventdate:any,eventowner:any,priority:any){
  const data={
    eventname,
    eventdate,
    eventowner,
    priority
  }
  return this.http.post('http://localhost:3003/delete',data)
}

}
