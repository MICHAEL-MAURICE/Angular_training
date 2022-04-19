import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  constructor() {}

  @Input() dataFromParent: any;

  @Output() chevent = new EventEmitter();

  sendData() {
    this.chevent.emit('Hello From Child');
  }
  ngOnInit(): void {}
}
