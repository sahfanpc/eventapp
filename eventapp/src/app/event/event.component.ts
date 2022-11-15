import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
eventsArray:any
array:any
testbutton:boolean=false
  constructor(private router:Router,private http:HttpClient,private db:DatabaseService) {

   }

  ngOnInit(): void {
var userid=JSON.parse(localStorage.getItem('userid')||'')
this.http.get("http://localhost:3003/events/"+userid).subscribe((result:any)=>{
  if(result){
    this.eventsArray=result
  }
})  
}
button1(event:any){
  console.log(event)
  localStorage.setItem('user1',JSON.stringify(event))
  var user1=JSON.parse(localStorage.getItem('user1')||'')
  this.array=user1
  // this.array.push(id.eventname)
this.testbutton=true
// var id1=user1
// this.db.button(id1).subscribe((result:any)=>{
// if(result){
//   this.array=result
// }
// })
// this.http.get('http://localhost:3003/events/'+id).subscribe((result:any)=>{
//   if(result){
//     return result
//   }
//   })

}
cancel(){
  this.testbutton=false
}
delete(id:any){
  console.log(id.eventdate)
   localStorage.setItem('user1',JSON.stringify(id.eventname))
  var users1=JSON.parse(localStorage.getItem('user1')||'')
  localStorage.setItem('user2',JSON.stringify(id.eventdate))
  var users2=JSON.parse(localStorage.getItem('user2')||'')
  localStorage.setItem('user3',JSON.stringify(id.eventowner))
  var users3=JSON.parse(localStorage.getItem('user3')||'')
  localStorage.setItem('user4',JSON.stringify(id.priority))
  var users4=JSON.parse(localStorage.getItem('user4')||'')
this.http.delete("http://localhost:3003/delete/"+users1+"/"+users2).subscribe((result:any)=>{

})
  this.testbutton=false 
  this.db.delete(users1,users2,users3,users4).subscribe((result:any)=>{
  
  })
}
}
