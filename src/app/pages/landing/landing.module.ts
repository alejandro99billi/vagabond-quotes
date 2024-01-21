import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRouterModuleModule } from './landing-router-module.module';
import { FootpageModule } from 'src/app/components/footpage/footpage.module';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRouterModuleModule,
    FootpageModule
  ]
})
export class LandingModule { }
