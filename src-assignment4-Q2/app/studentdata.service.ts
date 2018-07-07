import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Istudentdata} from './Istudentdata';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentdataService {

  constructor(private http:HttpClient) 
  {

   }

   private _url:string="/assets/Data/studentdata.json";

   Getstudentdata():Observable<Istudentdata[]>
   {
    return this.http.get<Istudentdata[]>(this._url);
   }
}
