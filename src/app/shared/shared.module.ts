import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './components/img/img.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HttpFilterPipe } from './pipes/http-filter.pipe';



@NgModule({
  declarations: [
    ImgComponent,
    TimeAgoPipe,
    HttpFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImgComponent,
    TimeAgoPipe,
    HttpFilterPipe
  ]
})
export class SharedModule { }
