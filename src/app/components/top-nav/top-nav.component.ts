import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent implements OnInit{
  constructor(private router:Router){

  }
  ngOnInit(): void {
      
  }
  onlogin(){
    this.router.navigate(['/login']);
  }
  onsignup(){
    this.router.navigate(['/signup']);
  }

}
