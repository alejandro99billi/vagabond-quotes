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
    this.addFadeOutAnimation('imageQuote0','textQuote0',5000)
  }
 
  playMusic(){
    const audio = document.getElementById('myAudio') as HTMLAudioElement;
    audio.play();
    this.router.navigate(['/landing'])
  }

  autoplay = true;

  addFadeOutAnimation(imageId: string, paragraphId: string, delayMilliseconds: number) {
    setTimeout(() => {
      const imageElement = document.getElementById(imageId);
      const paragraphElement = document.getElementById(paragraphId);

      if (imageElement && paragraphElement) {
        imageElement.classList.add('animate__fadeOutLeft');
        paragraphElement.classList.add('animate__fadeOutRight');
    
      }
    }, delayMilliseconds);
  }


  initAudio() {
    const audio = document.getElementById('myAudio') as HTMLAudioElement;
    audio.play();
    
  }

  
  

}