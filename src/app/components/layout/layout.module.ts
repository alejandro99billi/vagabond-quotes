import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterOutlet } from '@angular/router';
import { FootpageModule } from '../footpage/footpage.module';
import { ToopbarModule } from '../toopbar/toopbar.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    FootpageModule,
    ToopbarModule,
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
