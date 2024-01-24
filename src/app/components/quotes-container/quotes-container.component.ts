import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-container',
  templateUrl: './quotes-container.component.html',
  styleUrls: ['./quotes-container.component.scss']
})
export class QuotesContainerComponent implements OnInit {
  isFirstContainerVisible = true;
  playMusic(){
    const audio = document.getElementById('myAudio') as HTMLAudioElement;
    audio.play();
    
  }

  ngOnInit() {

  }
 
  goToQuote(){
     if (this.isFirstContainerVisible) {
      // Si el primer contenedor está visible, ocúltalo y muestra el segundo
      this.isFirstContainerVisible = false;
      this.addFadeOutAnimation('imageQuote0', 'textQuote0', 0); // Aplica la animación inmediatamente
    } else {
      // Si el segundo contenedor está visible, realiza alguna acción o animación adicional aquí si es necesario
    }
  }
  

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
}
