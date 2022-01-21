import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'testComp',
  template: `
     <h2>Welcome to the TEST App</h2>
     <h4>Property Binding</h4>
     <input [id]="txtName" type="text" value="property binding" /><br>
     <input [disabled]="false" id="{{txtName}}" type="text" value="property binding" /><br>
     <input [disabled]="isDisabled" id="{{txtName}}" type="text" value="property binding" /><br>
     <button>Click</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor() { }
  public txtName = "prop"
  public isDisabled = false
  ngOnInit(): void {
  }



}
