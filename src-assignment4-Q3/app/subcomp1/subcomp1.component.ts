import { Component, OnInit } from '@angular/core';
import {bookService} from '../book.service'

@Component({
  selector: 'app-subcomp1',
  templateUrl: './subcomp1.component.html',
  styleUrls: ['./subcomp1.component.css']
})
export class Subcomp1Component implements OnInit {

  constructor(private b:bookService )
   { }
public detail=[];
  ngOnInit() {
    this.detail=this.b.Booksdetail();
  }

}
