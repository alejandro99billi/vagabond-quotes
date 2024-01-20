import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'MusayiMiyamatoQuotes';
  audioFiles = [
    { title: 'Ladyfingers', link: '/assets/music/Ladyfingers.mp3' }
  ]; 

  ngOnInit() {
    this.initAudio();
  }
 
  playMusic(){
    const audio = document.getElementById('myAudio') as HTMLAudioElement;
    audio.play();
  }

  autoplay = true;
  initAudio() {
    const audio = document.getElementById('myAudio') as HTMLAudioElement;
    audio.play();
  }
}
