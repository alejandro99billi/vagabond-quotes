import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  title = 'MusayiMiyamatoQuotes';
  audioFiles = [
    { title: 'Ladyfingers', link: '/assets/music/Ladyfingers.mp3' }
  ]; 

   constructor(private router: Router){

  }

  ngOnInit() {
    this.initAudio();
  }
 
  playMusic(){
    const audio = document.getElementById('myAudio') as HTMLAudioElement;
    audio.play();
    this.router.navigate(['/landing'])
  }

  autoplay = true;
  initAudio() {
    const audio = document.getElementById('myAudio') as HTMLAudioElement;
    audio.play();
  }
}