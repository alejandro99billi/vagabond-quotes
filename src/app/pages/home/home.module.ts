import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home-router.module';
import { FootpageComponent } from 'src/app/components/footpage/footpage.component';
import { FootpageModule } from 'src/app/components/footpage/footpage.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRouterModule,
    FootpageModule
  ]
})
export class HomeModule { }
