import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styl-bin',
  template: `
   <h4>Style Binding</h4>
   <h5 [style.color]="'gold'">Hello World</h5>
   <h5 [style.color]="hasError ? 'red': 'gold'">Hello World</h5>
   <h5 [style.color]="colors">Hello World</h5>
  `,
  styles: [
  ]
})
export class StylBinComponent implements OnInit {

  constructor() { }

  public hasError = true
  public colors = "purple"
  ngOnInit(): void {
  }

}
