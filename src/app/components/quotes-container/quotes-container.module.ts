import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesContainerComponent } from './quotes-container.component';
import { CustomButtomModule } from '../custom-buttom/custom-buttom.module';



@NgModule({
  declarations: [
    QuotesContainerComponent
  ],
  imports: [
    CommonModule,
    CustomButtomModule
  ],
  exports:[
    QuotesContainerComponent
  ]
})
export class QuotesContainerModule { }
