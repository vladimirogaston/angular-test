import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, UserComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
