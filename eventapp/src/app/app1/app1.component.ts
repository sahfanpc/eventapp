import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {
  testbutton:boolean=false

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
down(){
this.testbutton=true
}
button(){
  this.router.navigateByUrl('register')
}
}
