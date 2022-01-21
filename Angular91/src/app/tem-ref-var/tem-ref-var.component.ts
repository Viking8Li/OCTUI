import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tem-ref-var',
  template: `
    <h4>Template Ref Var</h4>
    <input #myInput type="text"/>
    <button (click)="logMessage(myInput.value)">Click</button>
    <hr>
    <h4>Two Way Data Binding</h4>
    <input name="userName" [(ngModel)]="name" type="text" />
    {{name}}
  `,
  styles: [
  ]
})
export class TemRefVarComponent implements OnInit {

  constructor() { }

  public name = "Tom Hanks"
  ngOnInit(): void {
  }

  logMessage(txtVal){
    console.log(txtVal);
  }

}
