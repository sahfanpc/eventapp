import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.css']
})
export class DeleteeventComponent implements OnInit {

  eventsArray:any
  constructor(private router:Router ,private http:HttpClient) { }

  ngOnInit(): void {
    var userid=JSON.parse(localStorage.getItem('userid')||'')
    this.http.get("http://localhost:3003/eventdel/"+userid).subscribe((result:any)=>{
  
    this.eventsArray=result
  
})
  }

}
