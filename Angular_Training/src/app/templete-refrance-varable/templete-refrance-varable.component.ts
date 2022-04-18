import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templete-refrance-varable',
  templateUrl: './templete-refrance-varable.component.html',
  styleUrls: ['./templete-refrance-varable.component.css'],
})
export class TempleteRefranceVarableComponent implements OnInit {
  constructor() {}

  logMsg(msg: any) {
    console.log('Hello' + msg);
  }

  ngOnInit(): void {}
}
