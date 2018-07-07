import { Component, OnInit, Input ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public pdata;

  @Output() public cdata=new EventEmitter();

  senddata()
  {
    this.cdata.emit("hello daddy");
  }
  constructor() { }

  ngOnInit() {
  }

}
