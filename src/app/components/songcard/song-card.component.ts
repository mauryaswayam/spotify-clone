import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.css'
})
export class SongCardComponent {
constructor(private router:Router){}
onhome(){
  this.router.navigate(['home'])
}
ngAfterViewInit(): void {
  // Get all audio elements
  const audioElements = document.querySelectorAll('audio');
  // Add event listener to each audio element
  audioElements.forEach(audio => {
    audio.addEventListener('play', () => {
      // Pause all other audio elements
      audioElements.forEach(otherAudio => {
        if (otherAudio !== audio) {
          otherAudio.pause();
        }
      });
    });
  });
}

}
