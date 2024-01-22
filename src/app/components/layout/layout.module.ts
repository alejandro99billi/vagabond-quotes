import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterOutlet } from '@angular/router';
import { FootpageModule } from '../footpage/footpage.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    FootpageModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
