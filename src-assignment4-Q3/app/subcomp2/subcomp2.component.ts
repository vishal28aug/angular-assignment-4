import { Component, OnInit } from '@angular/core';
import { bookService } from '../book.service';

@Component({
  selector: 'app-subcomp2',
  templateUrl: './subcomp2.component.html',
  styleUrls: ['./subcomp2.component.css']
})
export class Subcomp2Component implements OnInit {
public detail=[];
  constructor(private b:bookService) { }

  ngOnInit() {
    this.detail=this.b.Booksdetail();
  }

}
