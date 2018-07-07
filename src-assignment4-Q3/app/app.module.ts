import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { bookService } from './book.service';
import { Subcomp1Component } from './subcomp1/subcomp1.component';
import { Subcomp2Component } from './subcomp2/subcomp2.component';
import { Subcomp3Component } from './subcomp3/subcomp3.component';


@NgModule({
  declarations: [
    AppComponent,
    Subcomp1Component,
    Subcomp2Component,
    Subcomp3Component,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [bookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
