import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {
  constructor (private router:Router){}


  Navigatesongcard(){
    this.router.navigate(['songcard'])
  }
  
  
  }


