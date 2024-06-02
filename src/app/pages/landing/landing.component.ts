import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  deployUrl = environment.deployUrl;
  
  showThirdImage = false;
  showSecondImage = false;

  constructor(private router: Router){

  }
  
  goHome(){
   this.router.navigate(['/home'])
  }
  
  ngOnInit() { 
    this.addFadeOutAnimation('wall1', 'text1', 4000)
    .then(() => {
      this.showSecondImage = true;
      //return this.addAnimationToExitForOtherImages('wall2', '', 5000);
    })
    .then(() => {
    
      this.showThirdImage = true;
      return this.addAnimationToExitForOtherImages('wall3', '', 5000);
    });
  }
 
  addFadeOutAnimation(imageId: string, paragraphId: string, delayMilliseconds: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const imageElement = document.getElementById(imageId);
        const paragraphElement = document.getElementById(paragraphId);

        if (imageElement && paragraphElement) {
          imageElement.classList.add('animate__fadeOutLeft');
          imageElement.classList.add('animate__slow');
          paragraphElement.classList.add('animate__fadeOutRight');
        
          setTimeout(() => {
            resolve();
          }, 5000); 
        }
      }, delayMilliseconds);
    });
  }

  addAnimationToExitForOtherImages(imageId: string, paragraphId: string, delayMilliseconds: number){
       
    setTimeout(() => {
      const imageElement = document.getElementById(imageId);
      const paragraphElement = document.getElementById(paragraphId);

      if (imageElement && paragraphElement) {
        imageElement.classList.add('animate__fadeOutLeft');
        paragraphElement.classList.add('animate__fadeOutRight');
      
        setTimeout(() => {
        }, 5000); 
      }
    }, delayMilliseconds);
  }
}


