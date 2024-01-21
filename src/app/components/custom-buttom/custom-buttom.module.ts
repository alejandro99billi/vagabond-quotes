import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtomComponent } from './custom-buttom.component';



@NgModule({
  declarations: [
    CustomButtomComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CustomButtomComponent]
})
export class CustomButtomModule { }
