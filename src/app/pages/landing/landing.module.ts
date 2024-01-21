import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRouterModuleModule } from './landing-router-module.module';
import { FootpageModule } from 'src/app/components/footpage/footpage.module';
import { CustomButtomModule } from 'src/app/components/custom-buttom/custom-buttom.module';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRouterModuleModule,
    FootpageModule,
    CustomButtomModule
  ]
})
export class LandingModule { }
