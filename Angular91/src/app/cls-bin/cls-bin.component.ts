import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cls-bin',
  template: `
    <h4>Class Binding</h4>
    <h5 class="text-success">Hello World</h5>
    <h5 [class]="successClass">Hello World</h5>
    <h5 class="text-special" [class]="successClass">Hello World</h5>
    <h5 [class.text-danger]="hasError">Hello World</h5>
  `,
  styles: [`
    .text-success {
      color:green
    }
    .text-danger {
      color:red
    }
    .text-special{
      font-style:italic
    }
  `]
})
export class ClsBinComponent implements OnInit {

  constructor() { }
  public successClass = 'text-success'
  public hasError = true

  ngOnInit(): void {
  }

}
