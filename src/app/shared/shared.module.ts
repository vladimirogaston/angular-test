import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    FlexModule
  ]
})
export class SharedModule { }
