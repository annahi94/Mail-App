import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActStatusPipe } from "../act-status.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActStatusPipe],
  exports:[ActStatusPipe]
})
export class MainPipeModule { }
