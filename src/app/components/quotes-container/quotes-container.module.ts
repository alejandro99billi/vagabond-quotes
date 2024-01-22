import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesContainerComponent } from './quotes-container.component';



@NgModule({
  declarations: [
    QuotesContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    QuotesContainerComponent
  ]
})
export class QuotesContainerModule { }
