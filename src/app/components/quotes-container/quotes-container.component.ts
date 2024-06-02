import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

interface Container {
  isVisible: boolean;
  text: string;
  imageSrc: string;
  imageAlt: string;
  isFinalQuote: boolean
}

@Component({
  selector: 'app-quotes-container',
  templateUrl: './quotes-container.component.html',
  styleUrls: ['./quotes-container.component.scss']
})
export class QuotesContainerComponent implements OnInit {
  
  deployUrl = environment.deployUrl;
  jsonUrl = this.deployUrl + '/assets/descriptions.json'
  
  currentIndex = 0;

  constructor(private http: HttpClient) {}
  
  containers: Container[] = [];
  
  loadContainersFromJson() {
    this.http.get<Container[]>(this.jsonUrl).subscribe(data => {
      console.log(this.jsonUrl)
      this.containers = data;
    });
  }

  isFirstContainerVisible = true;
  playMusic(){
    const audio = document.getElementById('myAudio') as HTMLAudioElement;
    audio.play();
    
  }

  ngOnInit() {
    this.loadContainersFromJson();
  }

 
  
  goToQuote() {
 
    this.addFadeOutAnimation(`imageQuote${this.currentIndex}`, `textQuote${this.currentIndex}`, 0);

    this.containers[this.currentIndex].isVisible = false;
    
    this.currentIndex = (this.currentIndex + 1) % this.containers.length;
    
    this.containers[this.currentIndex].isVisible = true;
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
