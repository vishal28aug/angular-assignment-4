import { Component, OnInit } from '@angular/core';
import {StudentdataService} from '../studentdata.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public sdata= [];
  constructor(private sservice:StudentdataService)
   {

    }



  ngOnInit() {
    
    this.sservice.Getstudentdata().subscribe(data=>this.sdata=data);
  }

}
