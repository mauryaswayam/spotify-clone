import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
constructor(private router:Router){}
onPlaylist(){
  this.router.navigate(['playlist'])
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

