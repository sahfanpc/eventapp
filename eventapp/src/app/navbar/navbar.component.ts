import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  a:any
  constructor(private router:Router,private db:DatabaseService,private http:HttpClient) { }

  ngOnInit(): void {
    if(!localStorage.getItem('user')){
      // alert('login again')
      this.router.navigateByUrl('')
    }
  }
 Event(){
this.router.navigateByUrl('event')
 }
 DeleteEvent(){
  this.router.navigateByUrl('deleteevent')
 }
 LogOut(){
  localStorage.removeItem('user')
this.router.navigateByUrl('login')
 }

}
