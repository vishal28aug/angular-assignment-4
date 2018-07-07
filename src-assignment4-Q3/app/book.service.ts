import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class bookService {

  constructor() 
  {}

  Booksdetail()
  {
    return[
            {"name":"vxyz","price":9999900,"author":"vishal","pages":200},
            {"name":"vsdf","price":343400,"author":"krishna","pages":900},
            {"name":"vasdcf","price":9456340,"author":"gokul","pages":600}


    ]
  }
}
