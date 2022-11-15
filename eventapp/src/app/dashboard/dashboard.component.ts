import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 testbutton:boolean=false
 textbutton:boolean=false
 userid:any
 addform=this.fb.group({
  eventname1:[''],
  eventdate1:[''],
  eventowner1:[''],
  value:['']
 })
  constructor(private router:Router,private fb:FormBuilder,private db:DatabaseService) { }

  ngOnInit(): void {
    this.userid=JSON.parse(localStorage.getItem('userid')||'')
    // this.addform.value.eventowner1=this.userid
  }
button(){
this.testbutton=true
console.log(this.userid);
this.textbutton=true

}
butt(){
  var eventname=this.addform.value.eventname1
  var eventdate=this.addform.value.eventdate1
  var eventowner=this.addform.value.eventowner1
  var priority=this.addform.value.value

  if(eventname==''||eventdate==''||eventowner==''||priority==''){
    alert("please fill")
  }else{
    if(eventowner==this.userid){
    if(this.addform.valid){
this.db.Add(eventname,eventdate,eventowner,priority).subscribe((result:any)=>{
alert(result.message)
console.log(result)
this.testbutton=false
this.router.navigateByUrl('event')
})
    }else{
      alert("invalid")
    }
  }
  }
}
close(){
  this.testbutton=false
}
  // this.testbutton=false
}

