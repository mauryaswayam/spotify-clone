import { Component } from '@angular/core';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { 
  constructor (private router:Router){}


Navigatesong(){
  this.router.navigate(['song'])
}

}