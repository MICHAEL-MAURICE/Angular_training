import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css'],
})
export class InterpolationBindingComponent implements OnInit {
  constructor() {}
  fullName: string = 'Michael Maurice';
  ngOnInit(): void {}
}
