import { Component } from '@angular/core';

@Component({
  selector: 'app-quotes-container',
  templateUrl: './quotes-container.component.html',
  styleUrls: ['./quotes-container.component.scss']
})
export class QuotesContainerComponent {
  playMusic(){
    const audio = document.getElementById('myAudio') as HTMLAudioElement;
    audio.play();
 
  }

}
