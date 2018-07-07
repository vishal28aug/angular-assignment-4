import { Component, OnInit } from '@angular/core';
import { bookService } from '../book.service';

@Component({
  selector: 'app-subcomp3',
  templateUrl: './subcomp3.component.html',
  styleUrls: ['./subcomp3.component.css']
})
export class Subcomp3Component implements OnInit {
public detail=[];
  constructor(private b:bookService) { }

  ngOnInit() {
this.detail=this.b.Booksdetail();
  }

}
