import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

   constructor(private router: Router){

  }

  ngOnInit() {
   // this.initAudio();
  }
 
  // playMusic(){
  //   const audio = document.getElementById('myAudio') as HTMLAudioElement;
  //   audio.play();
  //   this.router.navigate(['/landing'])
  // }

  // autoplay = true;
  // initAudio() {
  //   const audio = document.getElementById('myAudio') as HTMLAudioElement;
  //   audio.play();
  // }
}
