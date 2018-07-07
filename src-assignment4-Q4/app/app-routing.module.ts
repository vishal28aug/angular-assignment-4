import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OsComponent } from './os/os.component';
import { DbComponent } from './db/db.component';
import { ProglangzComponent } from './proglangz/proglangz.component';
import { AppComponent } from './app.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';

const routes: Routes = [
  {path : 'os', component:OsComponent},
  {path: 'db', component:DbComponent},
  {path: 'proglangz', component:ProglangzComponent},
  {path:'' ,component:AppComponent},
  {path:'**',component:InvalidpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
