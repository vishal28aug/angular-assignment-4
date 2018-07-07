import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentdataService } from './studentdata.service';
import { OsComponent } from './os/os.component';
import { ProglangzComponent } from './proglangz/proglangz.component';
import { DbComponent } from './db/db.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';

@NgModule({
  declarations: [
    AppComponent,
    OsComponent,
    ProglangzComponent,
    DbComponent,
    InvalidpageComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [StudentdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
